import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as examActions from "../store/exam.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ExamsService } from "../services/exams-service";

@Injectable()

export class ExamEffects{

    private _actions$=inject(Actions);
    private _examService=inject(ExamsService)

    loadQuestions$=createEffect(()=>{
         return this._actions$.pipe(
            ofType(examActions.loadQuestions),
            tap(() => console.log('Effect triggered')),
            switchMap(({examId})=>this._examService.getQuestionsByExamId(examId).pipe(
                map((res)=>{
                     console.log(res) 
                    
                    return examActions.loadQuestionsSuccess({
                        questions:res.questions
                    })
                }),
                    catchError((error)=> of(examActions.loadQuestionsFailure({error:error.message})))
            )

         )
         )

    })
}