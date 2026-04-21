import { RegisterButton } from './../../../../../../projects/auth/src/lib/components/register-button/register-button';
import { ForgotPasswordPayload } from './../../../../../../projects/auth/src/lib/interfaces/forgot-password-response';
import { AuthService } from './../../../../../../projects/auth/src/lib/services/auth-service';
import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRedirect } from '../../../../../../projects/auth/src/lib/components/auth-redirect/auth-redirect';
import { InputError } from '../../../../../../projects/auth/src/lib/components/input-error/input-error';

@Component({
  selector: 'forgot-password',
  imports: [AuthRedirect, RegisterButton, ReactiveFormsModule,InputError,CommonModule,AuthRedirect],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  email: string = '';
  forgotPasswordForm!: FormGroup;
  errorMessage:string='';

   private _fb=inject(FormBuilder);
   private readonly  _router = inject(Router);
   private _authService=inject(AuthService);

      ngOnInit() {
     this.forgotPasswordForm = this._fb.group({
      email:['',Validators.required],

    });
       this.forgotPasswordForm.get('email')?.valueChanges.subscribe(()=>{
      this.errorMessage='';
    });
  }
  onForgotPasswordSubmit() {
    const data=this.forgotPasswordForm.value;
      this._authService.forgotPassword(data).subscribe({
        next:(res:ForgotPasswordPayload)=>{
        this._router.navigate(['/auth/check-email'], {
        queryParams: { email: data.email }
    });
        },
        error:(err)=>{
          this.errorMessage=err;
        }
      })


  }


}
