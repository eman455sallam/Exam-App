import { RegisterButton } from 'auth';
import { ForgotPasswordPayload } from 'auth';
import { AuthService } from 'auth';
import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRedirect } from 'auth';
import { InputError } from 'auth';
import { LucideAngularModule, CircleX } from 'lucide-angular';


@Component({
  selector: 'forgot-password',
  imports: [AuthRedirect, RegisterButton, ReactiveFormsModule,InputError,CommonModule,AuthRedirect,LucideAngularModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  readonly CircleX=CircleX;
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
