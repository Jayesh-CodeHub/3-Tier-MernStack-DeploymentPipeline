import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000"); // Will update to container-based hostname in Docker Compose

function App() {
  const [username, setUsername] = useState('');
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    socket.on("session_started", (data) => {
      setSessions(prev => [...prev, data]);
    });

    return () => socket.disconnect();
  }, []);

  const handleStart = async () => {
    if (!username) return;
    const payload = { user: username, start_time: new Date().toISOString() };
    try {
      await axios.post("http://localhost:5000/api/start-session", payload);
    } catch (err) {
      console.error("Failed to start session", err);
    }
  };

  return (
    <div>

      <h2>DevPulse - Developer Activity Tracker</h2>
      <input
        placeholder="Enter your name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleStart}>Start Session</button>

      <h3>Active Sessions:</h3>
      <ul>
        {sessions.map((s, idx) => (
          <li key={idx}>
            <strong>{s.user}</strong> started at {new Date(s.start_time).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
