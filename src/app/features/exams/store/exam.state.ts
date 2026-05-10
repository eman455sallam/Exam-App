import { Question } from "../interfaces/question-response";

export interface ExamState{
    questions:Question[],
    currentIndex:number,
    answers:{[questionId:string]:string},
    loading:boolean,
    error:null | string
}