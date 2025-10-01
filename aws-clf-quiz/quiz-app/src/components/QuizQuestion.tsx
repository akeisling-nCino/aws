import type { Question } from "../types/quiz";

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  answerSubmitted: boolean;
  onSelectOption: (index: number) => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  progress: number;
}

const QuizQuestion = ({
  question,
  selectedAnswer,
  answerSubmitted,
  onSelectOption,
  onSubmitAnswer,
  onNextQuestion,
  onPreviousQuestion,
  isFirstQuestion,
  isLastQuestion,
  progress,
}: QuizQuestionProps) => {
  const getOptionClass = (index: number) => {
    let className = "option";

    if (selectedAnswer === index && !answerSubmitted) {
      className += " selected";
    }

    if (answerSubmitted) {
      if (index === question.correct) {
        className += " correct";
      } else if (index === selectedAnswer && index !== question.correct) {
        className += " incorrect";
      }
    }

    return className;
  };

  return (
    <div className="quiz-area">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question">
        <div className="question-text">{question.question}</div>
        <ul className="options">
          {question.options.map((option, index) => (
            <li
              key={index}
              className={getOptionClass(index)}
              onClick={() => onSelectOption(index)}
            >
              {String.fromCharCode(65 + index)}. {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="controls">
        <button
          className="btn btn-secondary"
          onClick={onPreviousQuestion}
          disabled={isFirstQuestion}
        >
          Previous
        </button>

        {!answerSubmitted ? (
          <button
            className="btn btn-primary"
            onClick={onSubmitAnswer}
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onNextQuestion}>
            {isLastQuestion ? "View Results" : "Next Question"}
          </button>
        )}
      </div>

      {answerSubmitted && (
        <div className="explanation show">
          <h4>Explanation:</h4>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
