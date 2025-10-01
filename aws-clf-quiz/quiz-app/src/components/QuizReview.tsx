import { useState } from "react";
import type { Question, UserAnswer } from "../types/quiz";

interface QuizReviewProps {
  questions: Question[];
  userAnswers: UserAnswer[];
  onExitReview: () => void;
}

const QuizReview = ({ questions, userAnswers, onExitReview }: QuizReviewProps) => {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const correctCount = userAnswers.filter(answer => answer.isCorrect).length;
  const scorePercentage = Math.round((correctCount / userAnswers.length) * 100);

  const toggleQuestion = (index: number) => {
    setExpandedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const allIndices = userAnswers.map((_, index) => index);
    setExpandedQuestions(new Set(allIndices));
  };

  const collapseAll = () => {
    setExpandedQuestions(new Set());
  };

  return (
    <div className="quiz-review">
      <div className="review-header">
        <div className="review-title">
          <h2>📋 Quiz Review</h2>
          <span className="review-score">Score: {correctCount}/{userAnswers.length} ({scorePercentage}%)</span>
        </div>
        <div className="review-controls">
          <div className="expand-controls">
            <button className="btn btn-sm" onClick={expandAll}>
              Expand All
            </button>
            <button className="btn btn-sm" onClick={collapseAll}>
              Collapse All
            </button>
          </div>
          <button className="btn btn-secondary" onClick={onExitReview}>
            Back to Results
          </button>
        </div>
      </div>

      <div className="review-questions">
        {userAnswers.map((userAnswer, index) => {
          const question = questions[userAnswer.questionIndex];
          const userSelectedOption = question.options[userAnswer.selectedOption];
          const correctOption = question.options[question.correct];
          const isExpanded = expandedQuestions.has(index);

          return (
            <div
              key={userAnswer.questionIndex}
              className={`review-question ${userAnswer.isCorrect ? 'correct' : 'incorrect'}`}
            >
              <div
                className="question-header clickable"
                onClick={() => toggleQuestion(index)}
              >
                <div className="question-summary">
                  <div className="question-meta">
                    <span className="question-number">Question {index + 1}</span>
                    <span className={`answer-status ${userAnswer.isCorrect ? 'correct' : 'incorrect'}`}>
                      {userAnswer.isCorrect ? '✅ Correct' : '❌ Incorrect'}
                    </span>
                  </div>
                  <div className="question-preview">
                    {question.question}
                  </div>
                </div>
                <span className="expand-icon">
                  {isExpanded ? '▼' : '▶'}
                </span>
              </div>

              {isExpanded && (
                <>
                  <div className="answer-options">
                    {question.options.map((option, optionIndex) => {
                      let className = 'option-review';

                      if (optionIndex === question.correct) {
                        className += ' correct-answer';
                      }

                      if (optionIndex === userAnswer.selectedOption && !userAnswer.isCorrect) {
                        className += ' user-incorrect';
                      }

                      if (optionIndex === userAnswer.selectedOption && userAnswer.isCorrect) {
                        className += ' user-correct';
                      }

                      return (
                        <div key={optionIndex} className={className}>
                          <span className="option-letter">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>
                          {option}
                          {optionIndex === question.correct && (
                            <span className="correct-indicator"> ✓</span>
                          )}
                          {optionIndex === userAnswer.selectedOption && optionIndex !== question.correct && (
                            <span className="incorrect-indicator"> ✗</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="answer-summary">
                    <div className="user-choice">
                      <strong>Your answer:</strong> {userSelectedOption}
                    </div>
                    {!userAnswer.isCorrect && (
                      <div className="correct-choice">
                        <strong>Correct answer:</strong> {correctOption}
                      </div>
                    )}
                  </div>

                  <div className="explanation">
                    <strong>Explanation:</strong>
                    <p>{question.explanation}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default QuizReview;