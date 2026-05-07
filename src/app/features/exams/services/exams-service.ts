import { inject, Injectable } from '@angular/core';
import { ExamsPayload, ExamsResponse } from '../interfaces/exams-response';
import { API_URL } from 'auth';
import { HttpClient } from '@angular/common/http';
import { ExamsListAdaptor } from '../adaptor/exams-list.adaptor';
import { ErrorHandlerService } from '../../../core/services/error-handler.service';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  private readonly _apiUrl=inject(API_URL);
    private readonly _httpclient=inject(HttpClient);
    private readonly _examsAdaptor=inject(ExamsListAdaptor);
    private readonly _errorHanderService=inject(ErrorHandlerService);

  getAllExams(diplomaId:string): Observable<ExamsPayload> {
          const url=`${this._apiUrl}/exams`;
         return this._httpclient.get<ExamsResponse>(url,{
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
}
