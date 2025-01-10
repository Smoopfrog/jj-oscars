# app.py
from flask import Flask, jsonify, request

app = Flask(__name__)


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
    # Process the new data here
    return jsonify(new_data), 201


if __name__ == '__main__':
    app.run(debug=True)
