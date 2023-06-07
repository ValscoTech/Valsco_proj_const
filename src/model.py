from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
CORS(app, origins='http://localhost:5173', methods=['POST'], headers=['Content-Type'])


@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"

@app.route("/cardata", methods=['POST'])
def model():
    try:
        raw_data = request.data.decode('utf-8')
        content = json.loads(raw_data)
        print(content)
        return jsonify(content['useremail'])
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(host="localhost", debug=True)
