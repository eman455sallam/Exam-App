import { Observable } from "rxjs";
import { ExamsPayload } from "../interfaces/all-exams-response";
import { QuestionsPayload } from "../interfaces/question-response";
import { Exam} from "../interfaces/exam-response";
import { SubmitExamRequest } from "../interfaces/submit-exam-request";
import { SubmitExamPayload } from "../interfaces/submit-exam-response";
import { SubmissionByIdPayload } from "../interfaces/submission-response-by-id";



export abstract class ExamsAbstract{
abstract getAllExams(diplomaId:string):Observable<ExamsPayload>;
abstract getQuestionsByExamId(examId:string):Observable<QuestionsPayload>;
abstract getExamById(examId:string):Observable<Exam>;
abstract submitExam(body:SubmitExamRequest):Observable<SubmitExamPayload>;
abstract  getSubmissionResponseById(id:string):Observable<SubmissionByIdPayload>;
}