from pydantic import BaseModel
from uuid import UUID
from datetime import datetime
from decimal import Decimal
from typing import Optional, List, Any

class LearnerBase(BaseModel):
    user_name: str
    email: str

class LearnerCreate(LearnerBase):
    pass

class Learner(LearnerBase):
    learner_id: UUID
    session_id: Optional[UUID] = None
    created_at: datetime
    last_seen_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class TopicBase(BaseModel):
    topic_key: str
    title: str
    category: str
    order_no: int
    is_active: bool = True

class Topic(TopicBase):
    class Config:
        from_attributes = True

class QuizBase(BaseModel):
    topic_key: str
    title: str
    passing_score_percent: Decimal = Decimal("70.0")
    is_active: bool = True

class Quiz(QuizBase):
    quiz_id: UUID

    class Config:
        from_attributes = True

class QuizOptionBase(BaseModel):
    option_text: str
    is_correct: bool = False
    order_no: int

class QuizOption(QuizOptionBase):
    option_id: UUID
    question_id: UUID

    class Config:
        from_attributes = True

class QuizQuestionBase(BaseModel):
    question_text: str
    explanation: Optional[str] = None
    order_no: int

class QuizQuestion(QuizQuestionBase):
    question_id: UUID
    quiz_id: UUID
    options: List[QuizOption] = []

    class Config:
        from_attributes = True

class QuizAttemptBase(BaseModel):
    learner_id: UUID
    quiz_id: UUID
    score_percent: Decimal

class QuizAttemptCreate(QuizAttemptBase):
    pass

class QuizAttempt(QuizAttemptBase):
    attempt_id: UUID
    started_at: datetime
    submitted_at: Optional[datetime] = None
    is_passed: Optional[bool] = None

    class Config:
        from_attributes = True

class QuizAttemptResponse(BaseModel):
    message: str
    attempt_id: UUID
    score: Decimal

class QuizAnswerBase(BaseModel):
    question_id: UUID
    chosen_option_id: Optional[UUID] = None

class QuizAnswerCreate(QuizAnswerBase):
    attempt_id: UUID

class QuizAnswer(QuizAnswerCreate):
    answer_id: UUID
    answered_at: datetime

    class Config:
        from_attributes = True

class TopicProgressBase(BaseModel):
    best_score_percent: Decimal = Decimal("0.0")
    is_completed: bool = False

class TopicProgress(TopicProgressBase):
    learner_id: UUID
    topic_key: str
    completed_at: Optional[datetime] = None
    updated_at: datetime

    class Config:
        from_attributes = True

class CertificateBase(BaseModel):
    certificate_code: str
    completed_topics: List[str]

class Certificate(CertificateBase):
    certificate_id: UUID
    learner_id: UUID
    issued_at: datetime

    class Config:
        from_attributes = True