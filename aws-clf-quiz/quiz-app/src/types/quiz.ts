export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface UserAnswer {
  questionIndex: number;
  selectedOption: number;
  isCorrect: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  correctAnswers: number;
  answerSubmitted: boolean;
  quizQuestions: Question[];
  userAnswers: UserAnswer[];
  isComplete: boolean;
  isReviewing: boolean;
}

export interface QuizStats {
  currentQuestion: number;
  correctCount: number;
  totalQuestions: number;
  progress: number;
}
