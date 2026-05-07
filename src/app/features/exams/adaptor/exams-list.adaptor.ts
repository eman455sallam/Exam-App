import { Injectable } from '@angular/core';
import { ExamsPayload, ExamsResponse } from '../interfaces/exams-response';

@Injectable({
  providedIn: 'root',
})
export class ExamsListAdaptor {
  adapt(data:ExamsResponse):ExamsPayload{
    return{
      data:data.payload.data,
      metadata:data.payload.metadata
    }
  }
  
}
