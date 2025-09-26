export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  correctAnswers: number;
  answerSubmitted: boolean;
  quizQuestions: Question[];
  isComplete: boolean;
}

export interface QuizStats {
  currentQuestion: number;
  correctCount: number;
  totalQuestions: number;
  progress: number;
}
