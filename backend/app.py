# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return "Welcome to the Flask Backend!"


@app.route('/api/data', methods=['GET'])
def get_data():
    # Example data
    data = {"message": "Hello, World!"}
    return jsonify(data)


@app.route('/api/data', methods=['POST'])
def post_data():
    new_data = request.json
    # Save the new data to a local JSON file
    with open('data.json', 'a') as f:  # Open the file in append mode
        json.dump(new_data, f)  # Write the new data
        f.write('\n')  # Add a newline for separation
    return jsonify(new_data), 201


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
