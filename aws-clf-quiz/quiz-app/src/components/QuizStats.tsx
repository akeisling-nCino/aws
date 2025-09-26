interface QuizStatsProps {
  currentQuestion: number;
  correctCount: number;
  totalQuestions: number;
}

const QuizStats = ({
  currentQuestion,
  correctCount,
  totalQuestions,
}: QuizStatsProps) => {
  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-value">{currentQuestion}</div>
        <div>Question</div>
      </div>
      <div className="stat">
        <div className="stat-value">{correctCount}</div>
        <div>Correct</div>
      </div>
      <div className="stat">
        <div className="stat-value">{totalQuestions}</div>
        <div>Total</div>
      </div>
    </div>
  );
};

export default QuizStats;
