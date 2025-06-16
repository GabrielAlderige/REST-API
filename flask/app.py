from flask import Flask, request, jsonify
import hashlib
import time

app = Flask(__name__)

@app.route('/md5', methods=['POST'])
def generate_md5():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "Invalid input"}), 400
    
    time.sleep(10) # async

    text = data['text']
    md5_hash = hashlib.md5(text.encode()).hexdigest()
    return jsonify({"md5": md5_hash})

if __name__ == '__main__':
    app.run(port=5000)  # Flask listen on port 5000
