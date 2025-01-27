# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import logging

app = Flask(__name__)
CORS(app)
# Set up logging
logging.basicConfig(level=logging.INFO)


@app.route('/')
def home():
    return "Welcome to the Flask Backend!"


@app.route('/api/predictions/<username>', methods=['GET'])
def get_predictions(username):
    # Read the data from the JSON file
    try:
        with open(f'{username}.json', 'r') as f:
            data = json.load(f)
            # Return only the 'picks' key
            return jsonify(data.get("picks", {}))
    except FileNotFoundError:
        return jsonify({})


@app.route('/api/predictions/<username>', methods=['POST'])
def post_predictions(username):
    new_data = request.json
    # Save the new data to a local JSON file
    with open(f'{username}.json', 'w') as f:  # Open the file in append mode
        # Write the new data with the key 'picks'
        json.dump({"picks": new_data}, f)
    return jsonify(new_data), 201


@app.route('/api/watchlist/<username>', methods=['GET'])
def get_watchlist(username):
    # Read the data from the JSON file
    try:
        with open(f'{username}.json', 'r') as f:
            data = json.load(f)
            # Return only the 'picks' key
            return jsonify(data.get("watchlist", {}))
    except FileNotFoundError:
        return jsonify({"watchlist": {}})


@app.route('/api/watchlist/<username>', methods=['PUT'])
def put_watchlist(username):
    new_data = request.json
    # Read the existing data from the JSON file
    try:
        with open(f'{username}.json', 'r') as f:
            existing_data = json.load(f)
    except FileNotFoundError:
        existing_data = {"watchlist": {}}  # Initialize if file does not exist

    # Add new_data to the existing watchlist
    existing_data["watchlist"].update(new_data)  # Assuming new_data is a list

    # Save the updated data back to the JSON file
    with open(f'{username}.json', 'w') as f:
        json.dump(existing_data, f)
    return jsonify(existing_data["watchlist"]), 201


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
