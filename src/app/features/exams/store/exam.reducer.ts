import { createReducer, on } from "@ngrx/store";
import { ExamState } from "./exam.state";
import * as examActions from "../store/exam.actions";


export const  initialState:ExamState={
    questions:[],
    currentIndex:0,
    answers:{},
    loading:false,
    error:null,
    submission:null,
    analytics: null,
    examId: null,
   startedAt: null,
    

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
    on(examActions.nextQuestion,(state=>({
        ...state,
        currentIndex:Math.min(state.currentIndex+1,state.questions.length-1)
    }))),
    on(examActions.prevQuestion,(state=>({
        ...state,
        currentIndex:Math.max(state.currentIndex-1,0)
    }))),
       on(examActions.answerQuestion,(state,{questionId,answer})=>({
        ...state,
        answers:{
            ...state.answers,
            [questionId]:answer
        }
    })),
    on(examActions.submitExam,(state)=>({
        ...state,
        loading:true,
        error:null

    })),
     on(examActions.submitExamSuccess,(state,{result})=>({
        ...state,
        loading:false,
       submission:result.submission,
       analytics:result.analytics,

    })),
    on(examActions.submitExamFailure,(state,{error})=>({
        ...state,
        loading:false,
       error

    })),
    on(examActions.setExamId, (state, { examId }) => ({
        ...state,
       examId
    })),

    on(examActions.setStartedAt, (state, { startedAt }) => ({
       ...state,
       startedAt
    })),


)