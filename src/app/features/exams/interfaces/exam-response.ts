export interface ExamResponse {
  status: boolean;
  code: number;
  payload: payload;

}
export interface payload {
  exam: Exam;
}
export interface Exam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  diplomaId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  diploma: Diploma;
  questionsCount: number;
}
export interface Diploma {
  id: string;
  title: string;
  description: string;
  image: string;
}