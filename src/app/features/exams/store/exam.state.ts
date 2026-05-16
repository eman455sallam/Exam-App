import { Question } from "../interfaces/question-response";
import { ExamAnswer } from "../interfaces/submit-exam-request";
import { QuestionAnalytics, Submission } from "../interfaces/submit-exam-response";

export interface ExamState{
    questions:Question[],
    currentIndex:number,
    answers:Record<string, string>,
    loading:boolean,
    error:null | string,
    submission: Submission| null,
    analytics:QuestionAnalytics[]| null,
    examId: string | null;
    startedAt: string | null;

}