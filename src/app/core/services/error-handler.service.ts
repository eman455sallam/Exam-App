import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  handleError(error:HttpErrorResponse):string{
    const apiError=error.error;
    if(apiError?.message){
      return apiError.message;
    }
    if(error.status===0){
       return 'Network error. Please check your internet connection.';
    }
    switch(error.status){
      case 400:
        return 'Bad request .';
      case 401:
        return'Unauthorized access .';
      case 403:
        return 'Access denied.';
      case 404 :
        return 'Requested resource not found .';
      case 500:
        return 'Internal server error .';
      default :
      return 'Something went wrong. Please try again.';
      
    }
  }
  
}
