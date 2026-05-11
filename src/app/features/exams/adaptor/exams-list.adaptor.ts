import { Injectable } from '@angular/core';
import { ExamsPayload, ExamResponse } from '../interfaces/exams-response';

@Injectable({
  providedIn: 'root',
})
export class ExamsListAdaptor {
  adapt(data:ExamResponse):ExamsPayload{
    return{
      data:data.payload.data,
      metadata:data.payload.metadata
    }
  }
  
}
