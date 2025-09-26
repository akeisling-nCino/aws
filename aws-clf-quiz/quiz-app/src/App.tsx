import { useState, useEffect } from "react";
import type { QuizState } from "./types/quiz";
import { selectRandomQuestions } from "./data/questions";
import QuizHeader from "./components/QuizHeader";
import QuizStats from "./components/QuizStats";
import QuizQuestion from "./components/QuizQuestion";
import QuizResults from "./components/QuizResults";
import "./App.css";

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    correctAnswers: 0,
    answerSubmitted: false,
    quizQuestions: [],
    isComplete: false,
  });

  // Initialize quiz with random questions
  useEffect(() => {
    const questions = selectRandomQuestions(20);
    setQuizState((prev) => ({
      ...prev,
      quizQuestions: questions,
    }));
  }, []);

  const selectOption = (index: number) => {
    if (quizState.answerSubmitted) return;
    setQuizState((prev) => ({ ...prev, selectedAnswer: index }));
  };

  const submitAnswer = () => {
    if (quizState.selectedAnswer === null) return;

    const currentQuestion =
      quizState.quizQuestions[quizState.currentQuestionIndex];
    const isCorrect = quizState.selectedAnswer === currentQuestion.correct;

    setQuizState((prev) => ({
      ...prev,
      answerSubmitted: true,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
    }));
  };

  const nextQuestion = () => {
    if (quizState.currentQuestionIndex < quizState.quizQuestions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        answerSubmitted: false,
      }));
    } else {
      setQuizState((prev) => ({ ...prev, isComplete: true }));
    }
  };

  const previousQuestion = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        selectedAnswer: null,
        answerSubmitted: false,
      }));
    }
  };

  const restartQuiz = () => {
    const questions = selectRandomQuestions(20);
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      correctAnswers: 0,
      answerSubmitted: false,
      quizQuestions: questions,
      isComplete: false,
    });
  };

  if (quizState.quizQuestions.length === 0) {
    return (
      <div className="container">
        <div className="header">
          <h1>🎯 AWS Cloud Practitioner (CLF-C02) Quiz</h1>
          <p>Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <QuizHeader />

      {!quizState.isComplete ? (
        <>
          <QuizStats
            currentQuestion={quizState.currentQuestionIndex + 1}
            correctCount={quizState.correctAnswers}
            totalQuestions={quizState.quizQuestions.length}
          />

          <QuizQuestion
            question={quizState.quizQuestions[quizState.currentQuestionIndex]}
            selectedAnswer={quizState.selectedAnswer}
            answerSubmitted={quizState.answerSubmitted}
            onSelectOption={selectOption}
            onSubmitAnswer={submitAnswer}
            onNextQuestion={nextQuestion}
            onPreviousQuestion={previousQuestion}
            isFirstQuestion={quizState.currentQuestionIndex === 0}
            isLastQuestion={
              quizState.currentQuestionIndex ===
              quizState.quizQuestions.length - 1
            }
            progress={
              ((quizState.currentQuestionIndex + 1) /
                quizState.quizQuestions.length) *
              100
            }
          />
        </>
      ) : (
        <QuizResults
          correctAnswers={quizState.correctAnswers}
          totalQuestions={quizState.quizQuestions.length}
          onRestartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
