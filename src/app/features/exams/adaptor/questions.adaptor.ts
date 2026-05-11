import { Injectable } from '@angular/core';
import { QuestionResponse, QuestionsPayload } from '../interfaces/question-response';

@Injectable({
  providedIn: 'root',
})
export class QuestionsAdaptor {
  adapt(data:QuestionResponse):QuestionsPayload{
    return {
      questions:data.payload.questions

    }

  }
  
}
