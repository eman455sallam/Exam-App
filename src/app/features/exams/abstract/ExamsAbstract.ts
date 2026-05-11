import { Observable } from "rxjs";
import { ExamsPayload } from "../interfaces/exams-response";
import { QuestionsPayload } from "../interfaces/question-response";
import { ExamPayload } from "../interfaces/exam-response";



export abstract class ExamsAbstract{
abstract getAllExams(diplomaId:string):Observable<ExamsPayload>;
abstract getQuestionsByExamId(examId:string):Observable<QuestionsPayload>;
abstract getExamById(examId:string):Observable<ExamPayload>;

}