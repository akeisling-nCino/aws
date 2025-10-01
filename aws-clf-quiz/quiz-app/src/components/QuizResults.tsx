interface QuizResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  onRestartQuiz: () => void;
  onStartReview: () => void;
}

const QuizResults = ({
  correctAnswers,
  totalQuestions,
  onRestartQuiz,
  onStartReview,
}: QuizResultsProps) => {
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return "Excellent! You're ready for the exam!";
    if (percentage >= 80) return "Great job! You're well prepared!";
    if (percentage >= 70) return "Good work! Review the missed topics.";
    if (percentage >= 60) return "Getting there! Keep studying.";
    return "More study needed. Focus on the fundamentals.";
  };

  const getScoreClass = (percentage: number) => {
    if (percentage >= 80) return "score-excellent";
    if (percentage >= 60) return "score-good";
    return "score-poor";
  };

  return (
    <div className="final-score">
      <div className={`score-circle ${getScoreClass(scorePercentage)}`}>
        {scorePercentage}%
      </div>
      <h2>Quiz Complete!</h2>
      <p>
        You scored {correctAnswers} out of {totalQuestions} questions correctly.
        <br />
        <strong>{getScoreMessage(scorePercentage)}</strong>
      </p>
      <div className="results-buttons">
        <button className="btn btn-secondary" onClick={onStartReview}>
          📋 Review Answers
        </button>
        <button className="btn btn-primary" onClick={onRestartQuiz}>
          Start New Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
