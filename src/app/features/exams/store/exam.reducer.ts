import { createReducer, on } from "@ngrx/store";
import { ExamState } from "./exam.state";
import * as examActions from "../store/exam.actions";


export const  initialState:ExamState={
    questions:[],
    currentIndex:0,
    answers:{},
    loading:false,
    error:null

}

export const examReducer=createReducer(initialState,

    on(examActions.loadQuestions ,(state)=>({
        ...state,
        loading:true,
        error:null
    })),

    on(examActions.loadQuestionsSuccess,(state,{questions})=>({
        ...state,
        loading:false,
        questions

    })),

     on(examActions.loadQuestionsFailure,(state,{error})=>({
        ...state,
        loading:false,
        error

    })),
)