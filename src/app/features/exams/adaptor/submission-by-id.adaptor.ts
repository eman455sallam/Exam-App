import { Injectable } from '@angular/core';
import { SubmissionByIdPayload, SubmissionResponseById } from '../interfaces/submission-response-by-id';

@Injectable({
  providedIn: 'root',
})
export class SubmissionByIdAdaptor{
  adapt(data:SubmissionResponseById):SubmissionByIdPayload{
    return {
      submission:data.payload.submission,
      analytics:data.payload.analytics
    }
  }
  
}
