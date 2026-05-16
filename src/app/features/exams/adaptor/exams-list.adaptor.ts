import { Injectable } from '@angular/core';
import { ExamsPayload, AllExamsResponse } from '../interfaces/all-exams-response';

@Injectable({
  providedIn: 'root',
})
export class ExamsListAdaptor {
  adapt(data:AllExamsResponse):ExamsPayload{
    return{
      data:data.payload.data,
      metadata:data.payload.metadata
    }
  }
  
}
