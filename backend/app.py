from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from sqlalchemy.orm import joinedload
from sqlalchemy import text
from dotenv import load_dotenv
import os
import logging

# Load environment variables
load_dotenv()

# Initialize app
app = Flask(__name__)
CORS(app, resources={
     r"/api/*": {"origins": ["http://localhost:3000", "https://jjoscars.netlify.app"]}})
logging.basicConfig(level=logging.INFO)

# Configure DB
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL', 'postgresql://jeffstinson:postgres@localhost/oscars')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    title_source = db.Column(db.String(10), default='movie')


class Movie(db.Model):
    __tablename__ = 'movies'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False, unique=True)
    nomination_year = db.Column(db.Integer, nullable=False)


class Nominee(db.Model):
    __tablename__ = 'nominees'
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey(
        'categories.id'), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'), nullable=True)

    category = db.relationship('Category', backref='nominees')
    movie = db.relationship('Movie', backref='nominees')


class Prediction(db.Model):
    __tablename__ = 'predictions'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, index=True)
    category_id = db.Column(db.Integer, db.ForeignKey(
        'categories.id'), nullable=False)
    nominee_id = db.Column(db.Integer, db.ForeignKey(
        'nominees.id'), nullable=False)


class MovieWatched(db.Model):
    __tablename__ = 'movies_watched'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, index=True)
    movie_id = db.Column(db.Integer, db.ForeignKey(
        'movies.id'), nullable=False)


class Score(db.Model):
    __tablename__ = 'scores'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, index=True)
    correct_guesses = db.Column(db.Integer, default=0)


@app.route('/')
def home():
    return "Welcome to the Oscars Prediction Game!"


# 🎯 Predictions
@app.route('/api/<username>/predictions/', methods=['POST'])
def post_predictions(username):
    predictions = request.json
    for category_id, nominee_id in predictions.items():
        pred = Prediction.query.filter_by(
            username=username, category_id=category_id).first()
        if pred:
            pred.nominee_id = nominee_id
        else:
            new_pred = Prediction(
                username=username, category_id=category_id, nominee_id=nominee_id)
            db.session.add(new_pred)
    db.session.commit()
    return jsonify({"message": "Predictions saved successfully!"}), 201


@app.route('/api/<username>/predictions/', methods=['GET'])
def get_predictions(username):
    predictions = db.session.query(
        Category.name, Nominee.name
    ).join(Prediction, Prediction.category_id == Category.id) \
     .join(Nominee, Prediction.nominee_id == Nominee.id) \
     .filter(Prediction.username == username).all()

    return jsonify({category: nominee for category, nominee in predictions})


# # 🎬 Movie Watchlist
def get_watchlist(username):
    user_watchlist = []

    # Query to get movies, their categories, nominees, and watch status
    query = text('''
        SELECT m.id AS movie_id, m.title, c.name AS category, n.name AS nominee,
               CASE WHEN mw.id IS NOT NULL THEN true ELSE false END AS viewed
        FROM movies m
        JOIN nominees n ON n.movie_id = m.id
        JOIN categories c ON n.category_id = c.id
        LEFT JOIN movies_watched mw ON mw.movie_id = m.id AND mw.username = :username
        ORDER BY m.title, c.name
    ''')

    results = db.session.execute(query, {'username': username}).fetchall()

    # Convert results to a list of dictionaries
    results_dict = [
        {
            "movie_id": row[0],
            "title": row[1],
            "category": row[2],
            "nominee": row[3],
            "viewed": row[4] if row[4] is not None else False
        }
        for row in results
    ]

    # Build the user_watchlist array
    movie_titles = set()  # To track unique movie titles
    for row in results_dict:
        movie_title = row["title"]
        # Normalize title for sorting by removing "the " prefix
        normalized_title = movie_title[4:] if movie_title.lower(
        ).startswith("the ") else movie_title
        if normalized_title not in movie_titles:
            movie_titles.add(normalized_title)
            user_watchlist.append({
                "id": row["movie_id"],
                "title": movie_title,
                "nominations": [{
                    "category": row["category"],
                    "nominee": row["nominee"]
                }],
                "viewed": row["viewed"]
            })
        else:
            # Find the existing movie entry and append the nomination
            for movie in user_watchlist:
                if movie["title"] == movie_title:
                    movie["nominations"].append({
                        "category": row["category"],
                        "nominee": row["nominee"]
                    })
                    break

    # Sort user_watchlist alphabetically, ignoring "the"
    user_watchlist.sort(key=lambda x: x["title"][4:] if x["title"].lower(
    ).startswith("the ") else x["title"])

    return jsonify(user_watchlist)


@app.route('/api/<username>/watchlist/', methods=['GET'])
def get_user_watchlist(username):
    try:
        return get_watchlist(username)
    except Exception as e:
        app.logger.error(f"Failed to get watchlist: {e}")
        return jsonify({"error": "Failed to retrieve watchlist"}), 500


# 🎬 Update Movie Watched Status
@app.route('/api/<username>/watchlist/update/', methods=['POST'])
def update_watch_status(username):
    data = request.json
    movie_id = data.get('movie_id')
    viewed = data.get('viewed')

    if movie_id is None or viewed is None:
        return jsonify({"error": "Invalid input"}), 400

    # Check if the movie is already in the watched list
    watched_entry = MovieWatched.query.filter_by(
        username=username, movie_id=movie_id).first()

    if watched_entry:
        # Update the existing entry
        if not viewed:
            db.session.delete(watched_entry)  # Remove entry if not viewed
        # If viewed is True, we do nothing as it already exists
    else:
        # Add a new entry if viewed is True
        if viewed:
            new_watched = MovieWatched(username=username, movie_id=movie_id)
            db.session.add(new_watched)

    db.session.commit()
    return jsonify({"movie_id": movie_id, "viewed": viewed}), 200


# �� Calculate Scores
@app.route('/api/scores/', methods=['GET'])
def calculate_scores():
    scores = db.session.query(
        Prediction.username,
        func.count(Prediction.id).label('correct_guesses')
    ).join(Nominee, Prediction.nominee_id == Nominee.id) \
     .join(Category, Prediction.category_id == Category.id) \
     .join(Result, (Prediction.category_id == Result.category_id) & (Prediction.nominee_id == Result.winner_id)) \
     .group_by(Prediction.username).all()

    return jsonify({user: score for user, score in scores})


# Initialize tables
with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
