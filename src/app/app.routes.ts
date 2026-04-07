import { SendEmailVerification } from './../../projects/auth/src/lib/components/send-email-verification/send-email-verification';
import { Routes } from '@angular/router';
import { Register } from '../../projects/auth/src/lib/components/register/register';
import { Login } from '../../projects/auth/src/lib/components/login/login';
import { ForgotPassword } from '../../projects/auth/src/lib/components/forgot-password/forgot-password';
import { CheckEmail } from '../../projects/auth/src/lib/components/check-email/check-email';
import { CreatePassword } from '../../projects/auth/src/lib/components/create-password/create-password';
import { VerifyOtp } from '../../projects/auth/src/lib/components/verify-otp/verify-otp';
import { Diplomas } from './features/diplomas/diplomas';

export const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login',component:Login},
  {path:'register',component:Register},
  {path:'forget-password',component:ForgotPassword},
  {path:'check-email',component:CheckEmail},
  {path:'create-password',component:CreatePassword},
  {path:'verify-otp',component:VerifyOtp},
  {path:'diplomas',component:Diplomas},
  {path:'send-email-verification',component:SendEmailVerification}

];
