import { Routes } from '@angular/router';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';
import { CheckEmail } from './features/auth/check-email/check-email';
import { CreatePassword } from './features/auth/create-password/create-password';
import { VerifyOtp } from './features/auth/verify-otp/verify-otp';

export const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login',component:Login},
  {path:'register',component:Register},
  {path:'forget-password',component:ForgotPassword},
  {path:'check-email',component:CheckEmail},
  {path:'create-password',component:CreatePassword},
  {path:'verify-otp',component:VerifyOtp}
];
