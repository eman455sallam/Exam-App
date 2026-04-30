import { Injectable } from '@angular/core';
import { DiplomaDetailsModel, DiplomaDetailsResponse } from '../interfaces/diploma-details-response';

@Injectable({
  providedIn: 'root',
})
export class DiplomaDetailsAdapter {
  adapt(data:DiplomaDetailsResponse):DiplomaDetailsModel{
    const diploma=data.payload.diploma;
    return{
      id: diploma.id,
    title: diploma.title ,
    description: diploma.description,
    image: diploma.image,
    immutable:diploma.immutable ,
    createdAt: diploma.createdAt,
    updatedAt: diploma.updatedAt,
    exams:diploma.exams
    }

  }
  
}
