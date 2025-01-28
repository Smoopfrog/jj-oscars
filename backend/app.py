# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import logging

app = Flask(__name__)
# Set up logging
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
logging.basicConfig(level=logging.INFO)


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
    try:
        with open(f'{username}.json', 'r') as f:
            data = json.load(f)
            return jsonify(data.get("picks", {}))
    # Handle both file not found and invalid JSON
    except (FileNotFoundError, json.JSONDecodeError):
        return jsonify({})


@app.route('/api/<username>/predictions/', methods=['POST'])
def post_predictions(username):
    validation_response = validate_username(username)
    if validation_response:
        return validation_response

    new_data = request.json
    # Save the new data to a local JSON file
    try:
        with open(f'{username}.json', 'r') as f:
            existing_data = json.load(f)
            if "picks" not in existing_data:
                existing_data["picks"] = {}
    except (FileNotFoundError, json.JSONDecodeError):
        existing_data = {"picks": {}}

    # Add new_data to the existing watchlist
    existing_data["picks"].update(new_data)

    # Save the updated data back to the JSON file
    with open(f'{username}.json', 'w') as f:
        json.dump(existing_data, f)
    return jsonify(existing_data["picks"]), 201


@app.route('/api/<username>/watchlist/', methods=['GET'])
def get_watchlist(username):
    validation_response = validate_username(username)
    if validation_response:
        return validation_response

    # Read the data from the JSON file
    try:
        with open(f'{username}.json', 'r') as f:
            data = json.load(f)
            # Return only the 'picks' key
            return jsonify(data.get("watchlist", {}))
    # Handle both file not found and invalid JSON
    except (FileNotFoundError, json.JSONDecodeError):
        return jsonify({})


@app.route('/api/<username>/watchlist/', methods=['PUT'])
def put_watchlist(username):
    validation_response = validate_username(username)
    if validation_response:
        return validation_response

    new_data = request.json
    try:
        with open(f'{username}.json', 'r') as f:
            existing_data = json.load(f)
            if "watchlist" not in existing_data:
                existing_data["watchlist"] = {}
    except (FileNotFoundError, json.JSONDecodeError):
        existing_data = {"watchlist": {}}

    # Add new_data to the existing watchlist
    existing_data["watchlist"].update(new_data)

    # Save the updated data back to the JSON file
    with open(f'{username}.json', 'w') as f:
        json.dump(existing_data, f)
    return jsonify(existing_data["watchlist"]), 201


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
