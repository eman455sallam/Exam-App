export interface SubmitExamResponse {
  status: boolean;
  code: number;
  payload: SubmitExamPayload;
}
export interface SubmitExamPayload {
  submission: Submission;
  analytics: QuestionAnalytics[];
}
export interface Submission {
  id: string;
  userId: string;
  examId: string;
  examTitle: string;
  exam: ExamInfo;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  startedAt: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}
export interface ExamInfo {
  id: string;
  title: string;
  duration: number;
}
export interface QuestionAnalytics {
  questionId: string;
  questionText: string;
  selectedAnswer: SelectedAnswer;
  isCorrect: boolean;
  correctAnswer: CorrectAnswer;
}
export interface SelectedAnswer {}

export interface CorrectAnswer {}