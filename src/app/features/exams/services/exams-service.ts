import { inject, Injectable } from '@angular/core';
import { ExamsPayload,AllExamsResponse} from '../interfaces/all-exams-response';
import { API_URL } from 'auth';
import { HttpClient } from '@angular/common/http';
import { ExamsListAdaptor } from '../adaptor/exams-list.adaptor';
import { ErrorHandlerService } from '../../../core/services/error-handler.service';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { QuestionResponse, QuestionsPayload } from '../interfaces/question-response';
import { ExamsAbstract } from '../abstract/ExamsAbstract';
import { QuestionsAdaptor} from '../adaptor/questions.adaptor';
import { Exam, ExamResponse} from '../interfaces/exam-response';
import { ExamAdaptor } from '../adaptor/exam-adaptor';
import { SubmitExamResponse } from '../interfaces/submit-exam-response';
import { SubmitExamRequest } from '../interfaces/submit-exam-request';
import { SubmitExamAdaptor } from '../adaptor/submit-exam-adaptor';

@Injectable({
  providedIn: 'root',
})
export class ExamsService extends ExamsAbstract{
  private readonly _apiUrl=inject(API_URL);
    private readonly _httpclient=inject(HttpClient);
    private readonly _allExamsAdaptor=inject(ExamsListAdaptor);
    private readonly _examAdaptor=inject(ExamAdaptor);
    private readonly _submitExamAdaptor=inject(SubmitExamAdaptor);
    private readonly _questionsAdaptor=inject(QuestionsAdaptor);
    private readonly _errorHanderService=inject(ErrorHandlerService);

    getAllExams(diplomaId:string): Observable<ExamsPayload> {
          const url=`${this._apiUrl}/exams`;
         return this._httpclient.get<AllExamsResponse>(url,{
          params:{
            diplomaId:diplomaId
          }
         }).pipe(
            map(res=>this._allExamsAdaptor.adapt(res)),
            catchError((err)=>{
              const errorMessage=this._errorHanderService.handleError(err);
              return throwError(()=> new Error(errorMessage))
            })
          )
    
      
    }

    getExamById(examId:string):Observable<Exam>{
        const url=`${this._apiUrl}/exams/${examId}`;
      return this._httpclient.get<ExamResponse>(url).pipe(
        map(res=>this._examAdaptor.adapt(res)),
        catchError((err)=>{
              const errorMessage=this._errorHanderService.handleError(err);
              return throwError(()=> new Error(errorMessage))
            })
      )
      

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


    // submit exam
    submitExam(body:SubmitExamRequest){
     
        const url=`${this._apiUrl}/submissions`;
      return this._httpclient.post<SubmitExamResponse>(url,body).pipe(
        map(res=>this._submitExamAdaptor.adapt(res)),
        catchError((err)=>{
          const errorMessage=this._errorHanderService.handleError(err);
          return throwError(()=>new Error(errorMessage));
        })
      );
    }
  }
