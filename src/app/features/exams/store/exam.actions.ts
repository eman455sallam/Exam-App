import { createAction, props } from "@ngrx/store";
import { Question } from "../interfaces/question-response";


export const loadQuestions=createAction('[Exam] Load Questions',
    props<{questions:Question[]}>()
);

export const nextQuestion=createAction('[Exam] Next Question');

export const prevQuestion=createAction('[Exam] Previous Question');

export const answerQuestion=createAction('[Exam] Answer Question',
    props<{
        questionId:string;
        answer:string}>()
);