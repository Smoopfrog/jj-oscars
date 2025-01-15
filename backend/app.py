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


@app.route('/api/<username>/data', methods=['GET'])
def get_data(username):
    # Read the data from the JSON file
    try:
        with open(f'{username}.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        return jsonify({})
    return jsonify(data)


@app.route('/api/<username>/data', methods=['POST'])
def post_data(username):
    new_data = request.json
    # Save the new data to a local JSON file
    with open(f'{username}.json', 'w') as f:  # Open the file in append mode
        json.dump(new_data, f)  # Write the new data
    return jsonify(new_data), 201


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
