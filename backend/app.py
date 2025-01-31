# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import logging
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
import os

app = Flask(__name__)
# Set up logging
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
logging.basicConfig(level=logging.INFO)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL', 'postgresql://jeffstinson:postgres@localhost/oscars')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class UserData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    picks = db.Column(JSON, nullable=True)
    watchlist = db.Column(JSON, nullable=True)


@app.route('/')
def home():
    return "Welcome to the Flask Backend!"


def validate_username(username):
    if username not in ["jordan", "jeff"]:
        return jsonify({"error": "Unauthorized user"}), 403
    return None


@app.route('/api/<username>/predictions/', methods=['GET'])
def get_predictions(username):
    validation_response = validate_username(username)
    if validation_response:
        return validation_response
    user_data = UserData.query.filter_by(username=username).first()
    if user_data:
        return jsonify(user_data.picks or {})
    return jsonify({})


@app.route('/api/<username>/predictions/', methods=['POST'])
def post_predictions(username):
    validation_response = validate_username(username)
    if validation_response:
        return validation_response

    new_data = request.json
    user_data = UserData.query.filter_by(username=username).first()
    if user_data:
        user_data.picks = {**user_data.picks, **new_data}
    else:
        user_data = UserData(username=username, picks=new_data)
        db.session.add(user_data)
    db.session.commit()
    return jsonify(user_data.picks), 201


@app.route('/api/<username>/watchlist/', methods=['GET'])
def get_watchlist(username):
    validation_response = validate_username(username)
    if validation_response:
        return validation_response
    user_data = UserData.query.filter_by(username=username).first()
    if user_data:
        return jsonify(user_data.watchlist or {})
    return jsonify({})


@app.route('/api/<username>/watchlist/', methods=['PUT'])
def put_watchlist(username):
    validation_response = validate_username(username)
    if validation_response:
        return validation_response

    new_data = request.json
    user_data = UserData.query.filter_by(username=username).first()
    if user_data:
        user_data.watchlist = {**user_data.watchlist, **new_data}
    else:
        user_data = UserData(username=username, watchlist=new_data)
        db.session.add(user_data)
    db.session.commit()
    return jsonify(user_data.watchlist), 201


# Create the database tables
with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
