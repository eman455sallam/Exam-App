import { inject, Injectable } from '@angular/core';
import { ExamsPayload, ExamResponse } from '../interfaces/exams-response';
import { API_URL } from 'auth';
import { HttpClient } from '@angular/common/http';
import { ExamsListAdaptor } from '../adaptor/exams-list.adaptor';
import { ErrorHandlerService } from '../../../core/services/error-handler.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { QuestionResponse, QuestionsPayload } from '../interfaces/question-response';
import { ExamsAbstract } from '../abstract/ExamsAbstract';
import { QuestionsAdaptor} from '../adaptor/questions.adaptor';
import { ExamPayload } from '../interfaces/exam-response';

@Injectable({
  providedIn: 'root',
})
export class ExamsService extends ExamsAbstract{
  private readonly _apiUrl=inject(API_URL);
    private readonly _httpclient=inject(HttpClient);
    private readonly _examsAdaptor=inject(ExamsListAdaptor);
    private readonly _questionsAdaptor=inject(QuestionsAdaptor);
    private readonly _errorHanderService=inject(ErrorHandlerService);

    getAllExams(diplomaId:string): Observable<ExamsPayload> {
          const url=`${this._apiUrl}/exams`;
         return this._httpclient.get<ExamResponse>(url,{
          params:{
            diplomaId:diplomaId
          }
         }).pipe(
            map(res=>this._examsAdaptor.adapt(res)),
            catchError((err)=>{
              const errorMessage=this._errorHanderService.handleError(err);
              return throwError(()=> new Error(errorMessage))
            })
          )
    
      
    }

    getExamById(examId:string):Observable<ExamPayload>{
      return 
      

    }

    getQuestionsByExamId(examId:string):Observable<QuestionsPayload>{
      const url=`${this._apiUrl}/questions/exam/${examId}`;
      return this._httpclient.get<QuestionResponse>(url).pipe(
        map(res=>this._questionsAdaptor.adapt(res)),
        catchError((err)=>{
          const errorMessage=this._errorHanderService.handleError(err);
          return throwError(()=>new Error(errorMessage));
        })
      )

    }
  }
