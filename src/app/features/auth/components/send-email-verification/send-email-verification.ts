import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthRedirect } from '../../../../../../projects/auth/src/lib/components/auth-redirect/auth-redirect';
import { InputError } from '../../../../../../projects/auth/src/lib/components/input-error/input-error';
import { RegisterButton } from '../../../../../../projects/auth/src/lib/components/register-button/register-button';
import { AuthService } from '../../../../../../projects/auth/src/lib/services/auth-service';
import { SendEmailVerificationPayload } from '../../../../../../projects/auth/src/lib/interfaces/send-email-verification-response';
@Component({
  selector: 'send-email-verification',
  imports: [ReactiveFormsModule, AuthRedirect, RegisterButton,InputError, CommonModule],
  templateUrl: './send-email-verification.html',
  styleUrl: './send-email-verification.css',
})
export class SendEmailVerification {
 registerEmailForm!: FormGroup;
     errorMessage:string='';

   private _fb=inject(FormBuilder);
   private readonly  _router = inject(Router);
   private _authService=inject(AuthService);

    ngOnInit() {
     this.registerEmailForm = this._fb.group({
      email:['',[Validators.required,Validators.email]],
    });

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
    this._router.navigate(['/auth/confirm-email-verification'],{queryParams:{email:data.email}}
    );
    },
    error:(err)=>{
      this.errorMessage=err;
    }
  })

}
}
