import { Injectable } from '@angular/core';
import { SubmitExamPayload, SubmitExamResponse } from '../interfaces/submit-exam-response';

@Injectable({
  providedIn: 'root',
})
export class SubmitExamAdaptor {
  adapt(data:SubmitExamResponse):SubmitExamPayload{
    return {
      submission:data.payload.submission,
      analytics:data.payload.analytics
    };
  }
}
