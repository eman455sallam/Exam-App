import { inject, Injectable } from '@angular/core';
import { AuthAbstract } from '../abstract/AuthAbstract';
import { LoginRequest } from '../interfaces/login-request';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoginPayload, LoginResponse } from '../interfaces/login-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from '../tokens/api.token';
import { LoginAdaptor } from '../adaptor/login.adaptor';
import { Router } from '@angular/router';
import { AUTH_REDIRECT } from '../tokens/auth-redirect.token';
import { SendEmailVerificationRequest } from '../interfaces/send-email-verification-request';
import { SendEmailVerificationPayload, SendEmailVerificationResponse } from '../interfaces/send-email-verification-response';
import { SendEmailVerificationAdaptor } from '../adaptor/send-email-verification.adaptor';
import { VerifyOtpRequest } from '../interfaces/verify-otp-request';
import { VerifyOtpPayload, VerifyOtpResponse } from '../interfaces/verify-otp-response';
import {  VerifyOtpAdaptor } from '../adaptor/verify-otp.adaptor';
import { RegisterRequest } from '../interfaces/register-request';
import { RegisterResponse, User } from '../interfaces/register-response';
import { RegisterAdaptor } from '../adaptor/register.adaptor';
import { ForgotPasswordPayload, ForgotPasswordResponse } from '../interfaces/forgot-password-response';
import { ForgotPasswordAdaptor } from '../adaptor/forgot-password.adaptor';
import { ResetPasswordRequest } from '../interfaces/reset-password-request';
import { ResetPasswordResponse, ResetPasswordResponsePayload } from '../interfaces/reset-password-response';
import { ResetPasswordAdaptor } from '../adaptor/reset-password.adaptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements  AuthAbstract {

  private readonly _httpclient=inject(HttpClient);
  private readonly _apiUrl=inject(API_URL);
  private readonly _loginAdaptor=inject(LoginAdaptor);
  private readonly  _router = inject(Router);
  private readonly  _redirectPath=inject(AUTH_REDIRECT);
  private readonly _sendEmailVerificationAdaptor=inject(SendEmailVerificationAdaptor);
  private readonly _verifyOtpAdaptor=inject(VerifyOtpAdaptor);
  private readonly _registerAdaptor=inject(RegisterAdaptor);
  private readonly _forgotPasswordAdaptor=inject(ForgotPasswordAdaptor);
  private readonly _resetPasswordAdaptor=inject(ResetPasswordAdaptor);



  // 1-login
  login(data:LoginRequest):Observable<LoginPayload>{
    const url=`${this._apiUrl}/auth/login`;
    return this._httpclient.post<LoginResponse>(url, data).pipe(
     map(res => this._loginAdaptor.adapt(res)),  catchError(err =>  throwError(() => this.handleError(err)))
     );
  }
  // 2-Redirct after login
  redirectAfterLogin() {
    this._router.navigate([this._redirectPath]);
  }
  // 3-SendEmailVerification
  SendEmailVerification(data:SendEmailVerificationRequest):Observable<SendEmailVerificationPayload>{
    const url=`${this._apiUrl}/auth/send-email-verification`;
    return this._httpclient.post<SendEmailVerificationResponse>(url,data).pipe(
      map(res=>this._sendEmailVerificationAdaptor.adapt(res)),
      catchError(err =>throwError(()=>this.handleError(err)))
    )

  }

  // 4-verifyOtp
  verifyOtp(data:VerifyOtpRequest):Observable<VerifyOtpPayload>{
        const url=`${this._apiUrl}/auth/confirm-email-verification`;
        return this._httpclient.post<VerifyOtpResponse>(url,data).pipe(
          map(res=> this._verifyOtpAdaptor.adapt(res)),
          catchError(err=>throwError(()=>this.handleError(err)))
        )

  }

  // 5 - Register data
     registerData:Partial<RegisterRequest>={}   //“Partial makes all properties optional temporarily”
     updateRegisterData(data:Partial<RegisterRequest>){
           this.registerData={
            ...this.registerData,
            ...data
           }

     }
     getRegisterRequest():RegisterRequest{
      return{
        firstName: this.registerData.firstName!,
        lastName: this.registerData.lastName!,
        username: this.registerData.username!,
        email: this.registerData.email!,
        phone: this.registerData.phone!,
        password: this.registerData.password!,
        confirmPassword: this.registerData.confirmPassword!
      }
     }
    register(data: RegisterRequest): Observable<User> {
      const url=`${this._apiUrl}/auth/register`;
      return this._httpclient.post<RegisterResponse>(url,data).pipe(
        map(res=>this._registerAdaptor.adapt(res)),
        catchError(err=>throwError(()=>this.handleError(err)))
      )

    }
    // 6-Forgot password
    forgotPassword(data: SendEmailVerificationRequest): Observable<ForgotPasswordPayload> {
      const url=`${this._apiUrl}/auth/forgot-password`;
      return this._httpclient.post<ForgotPasswordResponse>(url,data).pipe(
        map(res=>this._forgotPasswordAdaptor.adapt(res)),
        catchError(err=>throwError(()=>this.handleError(err)))
      )


    }
    //  7-resetPassword
    resetPassword(data:ResetPasswordRequest):Observable<ResetPasswordResponsePayload>{
      const url=`${this._apiUrl}/auth/reset-password`;
      return this._httpclient.post<ResetPasswordResponse>(url,data).pipe(
        map(res=>this._resetPasswordAdaptor.adapt(res)),
        catchError(err=>throwError(()=>this.handleError(err)))
      )
     
    }

     // 8-Handle error
  handleError(error: HttpErrorResponse): string {
    const apiError=error?.error;
    if(apiError?.errors ){
      return apiError.errors[0].messages || apiError.errors[0].message;

    }

  if (error.error?.message) {
    return error.error.message;
  }

  if (error.status === 0) {
    return 'Network error. Please check your connection.';
  }

  return 'Something went wrong. Please try again.';
}

}


