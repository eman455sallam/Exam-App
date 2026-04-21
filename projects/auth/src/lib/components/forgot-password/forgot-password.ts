import { Component, inject } from '@angular/core';
import { AuthButton } from "../auth-button/auth-button";
import { AuthRedirect } from "../auth-redirect/auth-redirect";
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputError } from '../input-error/input-error';
import { CommonModule } from '@angular/common';
import { RegisterButton } from '../register-button/register-button';
import { AuthService } from '../../services/auth-service';
import { ForgotPasswordPayload } from '../../interfaces/forgot-password-response';


@Component({
  selector: 'app-forgot-password',
  imports: [AuthRedirect, RegisterButton, ReactiveFormsModule,InputError,CommonModule],
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
        this._router.navigate(['/check-email'], {
        queryParams: { email: data.email }
    });
        },
        error:(err)=>{
          this.errorMessage=err;
        }
      })


  }


}
