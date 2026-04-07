import { inject, Injectable } from '@angular/core';
import { AuthAbstract } from '../abstract/AuthAbstract';
import { LoginRequest } from '../interfaces/login-request';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoginPayload, LoginResponse } from '../interfaces/login-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from '../tokens/api.token';
import { LoginAdaptor } from '../adaptor/login.adaptor';
import { Router } from '@angular/router';
import { AuthRedirect } from '../components/auth-redirect/auth-redirect';
import { SendEmailVerificationRequest } from '../interfaces/send-email-verification-request';
import { SendEmailVerificationPayload, SendEmailVerificationResponse } from '../interfaces/send-email-verification-response';
import { SendEmailVerificationAdaptor } from '../adaptor/send-email-verification.adaptor';
import { VerifyOtpRequest } from '../interfaces/verify-otp-request';
import { VerifyOtpPayload, VerifyOtpResponse } from '../interfaces/verify-otp-response';
import {  VerifyOtpAdaptor } from '../adaptor/verify-otp.adaptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements  AuthAbstract {

  private readonly _httpclient=inject(HttpClient);
  private readonly _apiUrl=inject(API_URL);
  private readonly _loginAdaptor=inject(LoginAdaptor);
  private readonly  _router = inject(Router);
  private readonly  _redirectPath=inject(AuthRedirect);
  private readonly _sendEmailVerificationAdaptor=inject(SendEmailVerificationAdaptor);
  private readonly _verifyOtpAdaptor=inject(VerifyOtpAdaptor);

  // 1-login
  login(data:LoginRequest):Observable<LoginPayload>{
    const url=`${this._apiUrl}/login`;
    return this._httpclient.post<LoginResponse>(url, data).pipe(
     map(res => this._loginAdaptor.adapt(res)),  catchError(err =>  throwError(() => this.handleError(err)))
     );
  }
  // 2-Redirct after login
  redirectAfterLogin() {
    this._router.navigate([this._redirectPath]);
  }
  // 3-Register Email
  SendEmailVerification(data:SendEmailVerificationRequest):Observable<SendEmailVerificationPayload>{
    const url=`${this._apiUrl}/send-email-verification`;
    return this._httpclient.post<SendEmailVerificationResponse>(url,data).pipe(
      map(res=>this._sendEmailVerificationAdaptor.adapt(res)),
      catchError(err =>throwError(()=>this.handleError(err)))
    )

  }

  // 4-verifyOtp
  verifyOtp(data:VerifyOtpRequest):Observable<VerifyOtpPayload>{
        const url=`${this._apiUrl}/confirm-email-verification`;
        return this._httpclient.post<VerifyOtpResponse>(url,data).pipe(
          map(res=> this._verifyOtpAdaptor.adapt(res)),
          catchError(err=>throwError(()=>this.handleError(err)))
        )

  }
  // 6-Handle error
  handleError(error: HttpErrorResponse): string {
  if (error.error?.message) {
    return error.error.message;
  }

  if (error.status === 0) {
    return 'Network error. Please check your connection.';
  }

  return 'Something went wrong. Please try again.';
}

}


