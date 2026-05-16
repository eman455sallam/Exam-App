import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as examActions from "../store/exam.actions";
import { catchError, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { ExamsService } from "../services/exams-service";
import { Store } from "@ngrx/store";
import * as examSelectors from "../store/exam.selectors";
import { SubmitExamRequest } from "../interfaces/submit-exam-request";


@Injectable()

export class ExamEffects{

    private _actions$=inject(Actions);
    private _examService=inject(ExamsService);
    private _store = inject(Store);


    loadQuestions$=createEffect(()=>{
         return this._actions$.pipe(
            ofType(examActions.loadQuestions),
            switchMap(({examId})=>this._examService.getQuestionsByExamId(examId).pipe(
                map((res)=>{

                    return examActions.loadQuestionsSuccess({
                        questions:res.questions
                    })
                }),
                    catchError((error)=> of(examActions.loadQuestionsFailure({error:error.message})))
            )

         )
         )

    });
    submitExam$=createEffect(()=>{
        return this._actions$.pipe(
            ofType(examActions.submitExam),

            withLatestFrom(

                this._store.select(examSelectors.selectAnswers),
                this._store.select(examSelectors.selectExamId),
                this._store.select(examSelectors.selectStartedAt),

            ),
            switchMap(([_,answers,examId,startedAt])=>{
                  if (!examId || !startedAt) {
                    return of(examActions.submitExamFailure({
                      error: 'Missing exam data'
                    }));
                   }
                const body:SubmitExamRequest={
                    examId,
                    startedAt,
                    answers:Object.entries(answers).map(([questionId, answerId]) => ({
                     questionId,
                     answerId
                    }))
                };
                  return this._examService.submitExam(body).pipe(
                    map(res=>
                        examActions.submitExamSuccess({result:res})
                    ),
                   catchError(error =>
                   of(examActions.submitExamFailure({ error: error.message }))
                   )
                  )


            })
        )
    })
}