import { createAction, props } from "@ngrx/store";
import { Question } from "../interfaces/question-response";
import { SubmitExamPayload, SubmitExamResponse } from "../interfaces/submit-exam-response";


export const loadQuestions=createAction('[Exam Page] Load Questions',props<{examId:string}>());

export const loadQuestionsSuccess=createAction('[Questions API] Load Questions Success',
    props<{questions:Question[]}>()
);

export const loadQuestionsFailure=createAction('[Questions API] Load Questions Falied',
    props<{error:string}>()
);

export const nextQuestion=createAction('[Exam Page] Next Question');

export const prevQuestion=createAction('[Exam Page] Previous Question');

export const answerQuestion=createAction('[Exam Page] Answer Question',
    props<{
        questionId:string;
        answer:string}>()
);
export const submitExam=createAction('[Exam page] Submit Exam');
export const submitExamSuccess=createAction('[Exam page] Submit Exam Success',
    props<{result:SubmitExamPayload}>()
);
export const submitExamFailure=createAction('[Exam page] Submit Exam Failure',
    props<{error:string}>()
);
export const setExamId = createAction(
  '[Exam Page] Set Exam Id',
  props<{ examId: string }>()
);

export const setStartedAt = createAction(
  '[Exam Page] Set Started At',
  props<{ startedAt: string }>()
);