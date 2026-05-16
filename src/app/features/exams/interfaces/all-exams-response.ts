export interface AllExamsResponse {
  status: boolean;
  code: number;
  payload: ExamsPayload;
}

export interface ExamsPayload {
  data: Exam[];
  metadata: PaginationMetadata;
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
  diploma: ExamDiploma;
  questionsCount: number;
}

export interface ExamDiploma {
  id: string;
  title: string;
}

export interface PaginationMetadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;

}
