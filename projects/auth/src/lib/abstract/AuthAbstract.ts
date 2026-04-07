import { SendEmailVerificationPayload, SendEmailVerificationResponse } from './../interfaces/send-email-verification-response';
import { ForgotPasswordResponse } from '../interfaces/forgot-password-response';
import { Observable } from "rxjs";
import { CheckEmailRequest } from "../interfaces/check-email-request";
import { CreatePasswordRequest } from "../interfaces/create-password-request";
import { ForgotPasswordRequest } from "../interfaces/forgot-password-request";
import { LoginRequest } from "../interfaces/login-request";
import { RegisterRequest } from "../interfaces/register-request";
import { VerifyOtpRequest } from "../interfaces/verify-otp-request";
import { LoginPayload, LoginResponse } from "../interfaces/login-response";
import { RegisterResponse } from "../interfaces/register-response";
import { VerifyOtpPayload } from "../interfaces/verify-otp-response";
import { CreatePasswordResponse } from '../interfaces/create-password-response';
import { CheckEmailResponse } from '../interfaces/check-email-response';
import { SendEmailVerificationRequest} from '../interfaces/send-email-verification-request';

export abstract class AuthAbstract{

  abstract login(data: LoginRequest):Observable<LoginPayload> ;

  abstract SendEmailVerification(data: SendEmailVerificationRequest): Observable<SendEmailVerificationPayload>;

  abstract verifyOtp(data: VerifyOtpRequest):Observable<VerifyOtpPayload> ;

  // abstract forgotPassword(data: ForgotPasswordRequest): Observable<ForgotPasswordResponse>;

  // abstract createPassword(data: CreatePasswordRequest):Observable<CreatePasswordResponse> ;

  // abstract checkEmail(data: CheckEmailRequest):Observable<CheckEmailResponse> ;
}
