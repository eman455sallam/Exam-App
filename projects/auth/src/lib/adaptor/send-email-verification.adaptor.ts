import { Injectable } from '@angular/core';
import { SendEmailVerificationPayload, SendEmailVerificationResponse } from '../interfaces/send-email-verification-response';

@Injectable({
  providedIn: 'root',
})
export class SendEmailVerificationAdaptor {
  adapt(data:SendEmailVerificationResponse):SendEmailVerificationPayload{
    return{
      message:data.message
    }
  }
}
