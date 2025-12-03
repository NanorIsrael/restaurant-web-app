# React + Flask Full-Stack Application

## Overview

This is a full-stack web application with a React frontend and Flask backend. The application follows modern development practices with separate frontend and backend servers.

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (3.8 or higher) - [Download](https://www.python.org/)
- **Git** - [Download](https://git-scm.com/)
- **Database** (PostgreSQL/MySQL/SQLite - choose one)

## Quick Start React

### 1. Clone the Repository
```bash
git clone https://github.com/NanorIsrael/restaurant-web-app.git
- cd restaurant-web-app
- npm install
- npm start
# Frontend runs at http://localhost:3000
```

### 2. Backend Setup (Flask)
```bash

git clone https://github.com/NanorIsrael/restaurant-backend.git
cd restaurant-web-app
Create Virtual Environment
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate

- cd backend
- pip install -r requirements.txt

# Flask Configuration
# PostgreSQL
# DATABASE_URL=postgresql://username:password@localhost/dbname

- Initialize database and create tables
python db_create.py
flask run

```

project-root/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   └── product.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   └── api.py
│   │   ├── utils/
│   │   │   ├── __init__.py
│   │   │   └── helpers.py
│   │   └── config.py
│   ├── migrations/
│   ├── requirements.txt
│   ├── .env
│   ├── .gitignore
│   └── app.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Button.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── utils/
│   │   │   └── constants.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── .env
│   └── .gitignore
└── README.md
[preview here](https://quantico-bistro.netlify.app/)
