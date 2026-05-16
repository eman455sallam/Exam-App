export interface SubmissionResponseById {
    status: boolean;
    code: number;
    payload: SubmissionByIdPayload;
}
export interface SubmissionByIdPayload {
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

  selectedAnswer: Answer;

  isCorrect: boolean;

  correctAnswer: Answer;
}
export interface Answer {
  id?: string;
  answer?: string;
}
