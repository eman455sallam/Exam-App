

export interface SubmitExamRequest {
  examId: string;
  answers: ExamAnswer[];
  startedAt: string;
}

export interface ExamAnswer {
  questionId: string;
  answerId: string;
}
