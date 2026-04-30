import { inject, Injectable } from '@angular/core';
import { DiplomasAbstract } from '../abstract/DiplomasAbstract';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DiplomaResponse, DiplomasPayload } from '../interfaces/diploma-response';
import { API_URL } from 'auth';
import { HttpClient } from '@angular/common/http';
import { DiplomaAdaptor } from '../adaptors/diploma.adaptor';
import { ErrorHandlerService } from '../../../core/services/error-handler.service';
import { DiplomaDetailsModel, DiplomaDetailsResponse } from '../interfaces/diploma-details-response';
import { DiplomaDetailsAdapter } from '../adaptors/diploma-details.adapter';

@Injectable({
  providedIn: 'root',
})
export class DiplomasService implements DiplomasAbstract{
    private readonly _apiUrl=inject(API_URL);
    private readonly _httpclient=inject(HttpClient);
    private readonly _diplomaAdaptor=inject(DiplomaAdaptor);
    private readonly _diplomaDetailsAdaptor=inject(DiplomaDetailsAdapter);
    private readonly _errorHanderService=inject(ErrorHandlerService);





  getAllDiplomas(): Observable<DiplomasPayload> {
        const url=`${this._apiUrl}/diplomas`;
       return this._httpclient.get<DiplomaResponse>(url).pipe(
          map(res=>this._diplomaAdaptor.adapt(res)),
          catchError((err)=>{
            const errorMessage=this._errorHanderService.handleError(err);
            return throwError(()=> new Error(errorMessage))
          })
        )
  
    
  }
  getDiplomaById(id:string):Observable<DiplomaDetailsModel>{
      const url=`${this._apiUrl}/diplomas/${id}`;
      return this._httpclient.get<DiplomaDetailsResponse>(url).pipe(
        map(res=>this._diplomaDetailsAdaptor.adapt(res)),
        catchError((err)=>{
          const errorMessage=this._errorHanderService.handleError(err);
            return throwError(()=> new Error(errorMessage))

        })
      );

  }
  
}
