import { Injectable } from '@angular/core';
import { ResetPasswordRequest } from '../interfaces/reset-password-request';
import { ResetPasswordResponse, ResetPasswordResponsePayload } from '../interfaces/reset-password-response';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordAdaptor {
    adapt(data:ResetPasswordResponse):ResetPasswordResponsePayload{
       return {
        message : data.message
      };
    }
}
