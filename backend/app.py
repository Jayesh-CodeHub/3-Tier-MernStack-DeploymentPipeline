from flask import Flask, request, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS
from pymongo import MongoClient
import os

# Initialize Flask app
app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)

# Initialize SocketIO with CORS support
socketio = SocketIO(app, cors_allowed_origins="*")

# Connect to MongoDB (use Docker env var or fallback to localhost)
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient(MONGO_URI)
db = client["devpulse"]
sessions = db["sessions"]

# API route to start a session
@app.route("/api/start-session", methods=["POST"])
def start_session():
    data = request.json
    session_id = sessions.insert_one({
        "user": data["user"],
        "start_time": data["start_time"]
    }).inserted_id

    # Emit event to connected frontend clients
    socketio.emit("session_started", data)

    return jsonify({"status": "started", "id": str(session_id)})

# Run the app
if __name__ == "__main__":
    print("🚀 Flask + SocketIO server starting at http://localhost:5000")
    socketio.run(app, host='0.0.0.0', port=5000)
