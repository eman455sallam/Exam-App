import { Injectable } from '@angular/core';
import { ForgotPasswordPayload, ForgotPasswordResponse } from '../interfaces/forgot-password-response';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordAdaptor {
  adapt(data:ForgotPasswordResponse):ForgotPasswordPayload{
    return {
      message:data.message}
  }

}
