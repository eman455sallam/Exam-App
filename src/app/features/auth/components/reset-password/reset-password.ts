import { Component, inject } from '@angular/core';
import { AuthButton } from '../../../../../../projects/auth/src/lib/components/auth-button/auth-button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputError } from "../../../../../../projects/auth/src/lib/components/input-error/input-error";
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../../../../projects/auth/src/lib/services/auth-service';
import { passwordMatchValidator } from '../../../../../../projects/auth/src/lib/validators/password-match.validators';
import { RegisterRequest } from '../../../../../../projects/auth/src/lib/interfaces/register-request';
@Component({
  selector: 'lib-reset-password',
  imports: [AuthButton, ReactiveFormsModule, InputError,PasswordModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {

  resetPasswordForm!: FormGroup;
  errorMessage:string='';

  private _authService=inject(AuthService);
  private _router = inject(Router);
  private _fb=inject(FormBuilder);
   ngOnInit() {
    this.resetPasswordForm=this._fb.group({
       password:['',[Validators.required ,Validators.minLength(8)]],
       confirmPassword:['',Validators.required] ,

    },
    {
        validators:passwordMatchValidator
       })

        this.resetPasswordForm.valueChanges.subscribe(()=>{
        this.errorMessage='';
        // Clear backend error message when user starts typing again as email already exist
      });


   }


  onResetPasswordFormSubmit(){


  }

}
