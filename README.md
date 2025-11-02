#LearnCSS
An Interactive Web-Based CSS Learning Platform
Overview

LearnCSS is an interactive learning platform designed to help users understand and practice CSS concepts such as basics, flexbox, grid, and responsive design.
The platform provides concise lessons, editable code examples, and real-time visual output to make learning CSS more engaging and practical.

Objectives

Introduce essential CSS concepts in a structured and accessible format.

Allow users to experiment with code directly in the browser.

Demonstrate core web development techniques using modern technologies.

Emphasize responsive and maintainable front-end design.

Features

Interactive Learning Environment: Users can modify and run CSS examples in a live editor.

Lesson Modules: Covers CSS fundamentals, Flexbox, Grid, and Responsive Layouts.

Responsive Interface: Adapts to desktop and mobile devices.

Backend Integration: Retrieves lessons dynamically from the database via API.

Lightweight and Modular Design: Built with scalable, modern tools.

Technology Stack
Component	Technology
Frontend	React, TypeScript, Tailwind CSS
Backend	FastAPI (Python), SQLite
Version Control	Git & GitHub
Communication	Slack
Planned Hosting	GitHub Pages / Render
Project Structure
LearnCSS/
│
├── frontend/           # React + TypeScript frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Lesson pages
│   │   └── App.tsx
│
├── backend/            # FastAPI backend
│   ├── main.py         # Entry point
│   ├── models.py       # Database models
│   ├── routes/         # API endpoints
│
├── README.md
└── requirements.txt

Installation and Setup
Prerequisites

Node.js and npm

Python 3.10 or later

Steps

Clone the repository:

git clone https://github.com/EceErgul/Project_435.git


Install dependencies:

# Frontend
cd frontend
npm install

# Backend
cd ../backend
pip install -r requirements.txt


Run the application:

# Frontend
npm start

# Backend
uvicorn main:app --reload

Development Status

The project is under active development.
Planned milestones include:

Interface and layout design

Frontend development

Backend setup

Integration and testing

Final deployment

License

This project is open for educational and non-commercial use.
