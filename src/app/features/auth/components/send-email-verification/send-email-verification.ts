import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthRedirect } from 'auth';
import { InputError } from 'auth';
import { RegisterButton } from 'auth';
import { AuthService } from 'auth';
import { SendEmailVerificationPayload } from 'auth';
import { LucideAngularModule, CircleX } from 'lucide-angular';

@Component({
  selector: 'send-email-verification',
  imports: [ReactiveFormsModule, AuthRedirect, RegisterButton,InputError, CommonModule,LucideAngularModule],
  templateUrl: './send-email-verification.html',
  styleUrl: './send-email-verification.css',
})
export class SendEmailVerification {
   readonly CircleX=CircleX;
 registerEmailForm!: FormGroup;
     errorMessage:string='';

   private _fb=inject(FormBuilder);
   private readonly  _router = inject(Router);
   private _authService=inject(AuthService);

    ngOnInit() {
     this.registerEmailForm = this._fb.group({
      email:['',[Validators.required,Validators.email]],
    });
    //  Getting saved data from session storage
    const savedEmail = sessionStorage.getItem('auth_email');
    if (savedEmail) {
    this.registerEmailForm.patchValue({
      email: savedEmail
    });
  }


    this.registerEmailForm.get('email')?.valueChanges.subscribe(()=>{
      this.errorMessage='';
      // Clear backend error message when user starts typing again as email already exist
    });

}


// Submit Email Form
onEmailSubmit(){

  const data=this.registerEmailForm.value;
  this._authService.SendEmailVerification(data).subscribe({
    next:(res:SendEmailVerificationPayload)=>{
          sessionStorage.setItem('auth_email', data.email);
    this._router.navigate(['/auth/confirm-email-verification']
    );
    },
    error:(err)=>{
      this.errorMessage=err;
    }
  })

}
}
