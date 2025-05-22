from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Python API!"

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "This is a basic Python API response."})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
