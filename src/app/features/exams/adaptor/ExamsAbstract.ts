import { Observable } from "rxjs";
import { ExamsPayload } from "../interfaces/exams-response";



export abstract class ExamsAbstract{
abstract getAllExams():Observable<ExamsPayload>;
}