
---

### ✅ `README.md` – **DevPulse** (React + Flask + MongoDB + Docker + GitHub Actions)

# 🚀 DevPulse – Realtime Productivity Tracker

DevPulse is a full-stack, containerized productivity tracker that captures real-time user activity using a React frontend, Flask backend with Socket.IO, and MongoDB for persistence. Built with DevOps principles in mind, it supports Docker Compose for orchestration and CI/CD deployment using GitHub Actions to AWS EC2.

---

## 🧩 Tech Stack

- ⚛️ **Frontend**: React (with Socket.IO client)
- 🐍 **Backend**: Flask + Flask-SocketIO
- 🗃️ **Database**: MongoDB (Docker container)
- 🐳 **Containerization**: Docker, Docker Compose
- 🔁 **CI/CD**: GitHub Actions
- ☁️ **Deployment Target**: AWS EC2

---

## 📸 Features

- Real-time session tracking
- MongoDB persistence
- Responsive UI with stylish dark theme
- Dockerized multi-service architecture
- CI/CD pipeline with test stage and automated deployment

---

## 📁 Folder Structure

```

devpulse/
├── frontend/                  # React app
├── backend/                   # Flask app
├── docker-compose.yml         # Defines frontend, backend, and MongoDB services
├── .github/workflows/         # GitHub Actions pipeline
│   └── deploy.yml
├── README.md

````

---

## 🚀 Local Setup (Without Docker)

### 1️⃣ Prerequisites

- Python 3.11+
- Node.js 18+
- MongoDB running locally on `localhost:27017`

### 2️⃣ Start Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
````

### 3️⃣ Start Frontend

```bash
cd frontend
npm install
npm start
```

### 🔍 Access the App

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## 🐳 Dockerized Setup (Recommended)

### 1️⃣ Build and Start

```bash
docker-compose up --build
```

### 2️⃣ Access the App

* Frontend: [http://localhost:3000](http://localhost:3000)
* Flask API: [http://localhost:5000](http://localhost:5000)
* MongoDB: internal container (not exposed publicly)

---

## 🧪 Testing the Backend (CI Test Sample)

> `backend/test_app.py`

```python
from app import app

def test_index_route():
    with app.test_client() as client:
        response = client.get('/')
        assert response.status_code in [200, 404]
```

Run with:

```bash
cd backend
pytest test_app.py
```

---

## 🔐 GitHub Actions – CI/CD Pipeline

### Workflow Steps:

1. Checkout code
2. Build frontend and backend
3. Run backend test (e.g., `/api/start-session`)
4. SSH into EC2 and run `docker-compose up`

### Required GitHub Secrets:

| Name         | Description                      |
| ------------ | -------------------------------- |
| `EC2_HOST`   | EC2 public IP address            |
| `EC2_USER`   | SSH username (e.g., `ubuntu`)    |
| `EC2_KEY`    | Base64-encoded private SSH key   |
| `DEPLOY_DIR` | Path on EC2 where code is cloned |

---

## 🌐 Deployment to AWS EC2 (Docker + SSH)

1. Launch an EC2 instance with Docker installed
2. Clone this repository and run:

   ```bash
   docker-compose up -d --build
   ```
3. GitHub Actions can deploy automatically on push to `main`

---

## 🧠 Environment Variables

| Variable    | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `MONGO_URI` | MongoDB connection string. In Docker: `mongodb://mongo:27017/` |

---

## 💅 Aesthetic UI Preview

> Custom styling includes glassmorphism, glowing neon buttons, and dark theme UI.

![screenshot](link-to-screenshot-if-hosted)

---

## 📌 Future Improvements

* JWT-based authentication
* MongoDB Atlas integration
* NGINX reverse proxy
* Role-based dashboards

---

## 👨‍💻 Author

**Jay Tripathi**
DevOps Engineer & Python Automation Developer
📧 [LinkedIn](https://linkedin.com/in/your-profile)
📦 Project hosted on: [GitHub](https://github.com/your-username/devpulse)

---

## 📄 License

This project is licensed under the MIT License.

```

---

## ✅ Let Me Know If You Want:

- A screenshot for the aesthetic section
- Badges (CI passing, Docker build, etc.)
- A public GitHub repo scaffolding
- A downloadable ZIP of everything



