export interface QuestionResponse {
      status: boolean;
      code: number;
      payload: QuestionsPayload;
}

export interface QuestionsPayload {
  questions: Question[];
}
export interface Question {
  id: string;
  text: string;
  examId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  answers: Answer[];
  exam: ExamInfo;
}
export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface ExamInfo {
  id: string;
  title: string;
}