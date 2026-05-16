import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExamState } from "./exam.state";

const featureKey='exam';

export const selectExamState=createFeatureSelector<ExamState>(featureKey);

export const selectAllQuestions=createSelector(selectExamState,(state)=>state.questions);
export const selectCurrentIndex=createSelector(selectExamState,(state)=>state.currentIndex);
export const selectAnswers=createSelector(selectExamState,(state)=>state.answers);
export const selectCurrentQuestion=createSelector(
    selectAllQuestions,
    selectCurrentIndex,
    (questions,index)=>questions?.[index]??null
);
export const selectExamId=createSelector(selectExamState,(state)=>state.examId);
export const selectCurrentAnswer=createSelector(
    selectCurrentQuestion,
    selectAnswers,
    (question,answers)=>{
       
        return answers[question.id]?? null;
    }
);
export const selectStartedAt = createSelector(selectExamState,(state)=>state.startedAt);
export const isTheLastQuestion=createSelector(selectExamState,
    (state)=>state.currentIndex === state.questions.length-1
);
export const submissionResult=createSelector(selectExamState,(state)=>state.submission);
