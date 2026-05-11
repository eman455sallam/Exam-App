import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExamState } from "./exam.state";

const featureKey='exam';

export const selectExamState=createFeatureSelector<ExamState>(featureKey);

export const selectAllQuestions=createSelector(selectExamState,(state)=>state.questions);
export const selectCurrentIndex=createSelector(selectExamState,(state)=>state.currentIndex);
export const selectAnswers=createSelector(selectExamState,(state)=>state.answers);