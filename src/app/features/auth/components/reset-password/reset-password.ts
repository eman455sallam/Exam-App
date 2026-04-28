import { Component, inject } from '@angular/core';
import { AuthButton } from 'auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputError } from "auth";
import { PasswordModule } from 'primeng/password';
import { AuthService } from 'auth';
import { passwordMatchValidator } from 'auth';
import { RegisterRequest } from 'auth';
import { LucideAngularModule, CircleX } from 'lucide-angular';

@Component({
  selector: 'lib-reset-password',
  imports: [AuthButton, ReactiveFormsModule, InputError,PasswordModule,LucideAngularModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  readonly CircleX=CircleX;
  resetPasswordForm!: FormGroup;
  errorMessage:string='';
  token:string='';
  private _authService=inject(AuthService);
  private _router = inject(Router);
  private _route=inject(ActivatedRoute);
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

       this.token = this._route.snapshot.queryParamMap.get('token') || '';


   }


  onResetPasswordFormSubmit(){
    if(this.resetPasswordForm.invalid) return;

  this._authService.resetPassword({
    token: this.token,
    newPassword: this.resetPasswordForm.value.password,
    confirmPassword: this.resetPasswordForm.value.confirmPassword
    
  }).subscribe({
    next: () => {

      this._router.navigate(['/auth/login']);
    },
    error: (err) => {
      this.errorMessage = err;
    }
  });
  }

}
