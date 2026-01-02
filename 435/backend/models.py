from sqlalchemy import (
    Column,
    String,
    Text,
    Integer,
    Boolean,
    ForeignKey,
    TIMESTAMP,
    Numeric,
    JSON)
from sqlalchemy.dialects.postgresql import UUID
from database import Base
import uuid
from sqlalchemy.sql import func

class Learner(Base):
    __tablename__ = "learners"

    learner_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(UUID(as_uuid=True), unique=True)
    user_name = Column(Text)
    email = Column(Text, unique=True)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    last_seen_at = Column(TIMESTAMP(timezone=True))

class Topic(Base):
    __tablename__ = "topics"

    topic_key = Column(Text, primary_key=True)
    title = Column(Text, nullable=False)
    category = Column(Text, nullable=False)
    order_no = Column(Integer, nullable=False)
    is_active = Column(Boolean, default=True)

class Quiz(Base):
    __tablename__ = "quizzes"

    quiz_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    topic_key = Column(Text, ForeignKey("topics.topic_key"), nullable=False)
    title = Column(Text, nullable=False)
    passing_score_percent = Column(Numeric(5, 2), default=70)
    is_active = Column(Boolean, default=True)

class QuizQuestion(Base):
    __tablename__ = "quiz_questions"

    question_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    quiz_id = Column(UUID(as_uuid=True), ForeignKey("quizzes.quiz_id"), nullable=False)
    question_text = Column(Text, nullable=False)
    explanation = Column(Text)
    order_no = Column(Integer, nullable=False)

class QuizOption(Base):
    __tablename__ = "quiz_options"

    option_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    question_id = Column(UUID(as_uuid=True), ForeignKey("quiz_questions.question_id"), nullable=False)
    option_text = Column(Text, nullable=False)
    is_correct = Column(Boolean, default=False)
    order_no = Column(Integer, nullable=False)

class QuizAttempt(Base):
    __tablename__ = "quiz_attempts"

    attempt_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    learner_id = Column(UUID(as_uuid=True), ForeignKey("learners.learner_id"), nullable=False)
    quiz_id = Column(UUID(as_uuid=True), ForeignKey("quizzes.quiz_id"), nullable=False)
    started_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    submitted_at = Column(TIMESTAMP(timezone=True))
    score_percent = Column(Numeric(5, 2))
    is_passed = Column(Boolean)

class QuizAnswer(Base):
    __tablename__ = "quiz_answers"

    answer_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    attempt_id = Column(UUID(as_uuid=True), ForeignKey("quiz_attempts.attempt_id"), nullable=False)
    question_id = Column(UUID(as_uuid=True), ForeignKey("quiz_questions.question_id"), nullable=False)
    chosen_option_id = Column(UUID(as_uuid=True), ForeignKey("quiz_options.option_id"))
    answered_at = Column(TIMESTAMP(timezone=True), server_default=func.now())

class TopicProgress(Base):
    __tablename__ = "topic_progress"

    learner_id = Column(UUID(as_uuid=True), ForeignKey("learners.learner_id"), primary_key=True)
    topic_key = Column(Text, ForeignKey("topics.topic_key"), primary_key=True)
    best_score_percent = Column(Numeric(5, 2), default=0)
    is_completed = Column(Boolean, default=False)
    completed_at = Column(TIMESTAMP(timezone=True))
    updated_at = Column(TIMESTAMP(timezone=True), server_default=func.now())

class Certificate(Base):
    __tablename__ = "certificates"

    certificate_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    learner_id = Column(UUID(as_uuid=True), ForeignKey("learners.learner_id"))
    certificate_code = Column(Text, unique=True)
    issued_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    completed_topics = Column(JSON)