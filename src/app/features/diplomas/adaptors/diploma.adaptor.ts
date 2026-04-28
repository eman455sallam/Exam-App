import { Injectable } from '@angular/core';
import {  DiplomaResponse, DiplomasPayload } from '../interfaces/diploma-response';

@Injectable({
  providedIn: 'root',
})
export class DiplomaAdaptor {
  adapt(data:DiplomaResponse):DiplomasPayload{
    return {
      diplomas:data.payload.diplomas,
      metadata: data.payload.metadata
    }
    
  }
}
