from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import models
import schemas
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from uuid import UUID
import os

app = FastAPI(title="LearnCSS Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    """Redirect to index.html"""
    from fastapi.responses import FileResponse
    index_path = os.path.join(frontend_path, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    return {"message": "Welcome to LearnCSS API"}

@app.get("/api/topics", response_model=list[schemas.Topic])
def get_topics(db: Session = Depends(get_db)):
    """Get all active topics/lessons"""
    try:
        return db.query(models.Topic).filter(models.Topic.is_active == True).all()
    except Exception as e:
        print(f"ERROR: {e}")
        return []

@app.get("/api/quiz/{quiz_id}")
def get_quiz(quiz_id: UUID, db: Session = Depends(get_db)):
    """Get quiz questions and options by quiz ID"""
    questions = db.query(models.QuizQuestion).filter(
        models.QuizQuestion.quiz_id == quiz_id
    ).order_by(models.QuizQuestion.order_no).all()

    result = []
    for q in questions:
        options = db.query(models.QuizOption).filter(
            models.QuizOption.question_id == q.question_id
        ).order_by(models.QuizOption.order_no).all()

        result.append({
            "id": q.question_id,
            "question_text": q.question_text,
            "explanation": q.explanation,
            "options": options
        })

    return {"quiz_id": quiz_id, "questions": result}

@app.post("/api/quiz/attempt", response_model=schemas.QuizAttemptResponse)
def submit_quiz_attempt(attempt: schemas.QuizAttemptCreate, db: Session = Depends(get_db)):
    """Submit a quiz attempt"""
    new_attempt = models.QuizAttempt(
        learner_id=attempt.learner_id,
        quiz_id=attempt.quiz_id,
        score_percent=attempt.score_percent
    )
    db.add(new_attempt)
    db.commit()
    db.refresh(new_attempt)

    return {
        "message": "Quiz attempt saved successfully",
        "attempt_id": new_attempt.attempt_id,
        "score": new_attempt.score_percent
    }

frontend_path = os.path.join(os.path.dirname(__file__), "..", "frontend")
if os.path.exists(frontend_path):
    app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")