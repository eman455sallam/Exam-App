import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VerifyOtpPayload, VerifyOtpResponse } from '../interfaces/verify-otp-response';

@Injectable({
  providedIn: 'root',
})
export class VerifyOtpAdaptor {
  adapt(data:VerifyOtpResponse):VerifyOtpPayload{
     return {
      message : data.message
    };
  }

}
