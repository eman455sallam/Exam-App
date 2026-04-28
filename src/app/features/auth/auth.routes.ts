import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { CheckEmail } from './components/check-email/check-email';
import { CreatePassword } from './components/create-password/create-password';
import { SendEmailVerification } from './components/send-email-verification/send-email-verification';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { VerifyOtp } from './components/verify-otp/verify-otp';
import { ResetPassword } from './components/reset-password/reset-password';
import { verifyOtpGuard } from './core/gurds/verify-otp-guard';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'register', component: Register ,canActivate:[verifyOtpGuard] },
      { path: 'forget-password', component: ForgotPassword },
      { path: 'reset-password', component: ResetPassword },
      { path: 'check-email', component: CheckEmail },
      { path: 'create-password', component: CreatePassword ,canActivate:[verifyOtpGuard] },
      { path: 'send-email-verification', component: SendEmailVerification },
      { path: 'confirm-email-verification', component: VerifyOtp ,canActivate:[verifyOtpGuard]},

    ]
  }
];
