import { Injectable } from '@angular/core';
import { Exam, ExamResponse } from '../interfaces/exam-response';

@Injectable({
  providedIn: 'root',
})
export class ExamAdaptor {
  adapt(data:ExamResponse):Exam{
    const base=data.payload.exam;
    return{
        id:base.id,
        title:base.title,
        description:base.description,
        image:base.image,
        duration:base.duration,
        diplomaId:base.diplomaId,
        immutable:base.immutable,
        createdAt:base.createdAt,
        updatedAt:base.updatedAt,
        diploma:base.diploma,
        questionsCount:base.questionsCount
      
    
    }
  }
}
