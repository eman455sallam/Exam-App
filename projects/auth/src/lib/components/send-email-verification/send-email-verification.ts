import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterButton } from "../register-button/register-button";
import { AuthRedirect } from "../auth-redirect/auth-redirect";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { SendEmailVerificationPayload } from '../../interfaces/send-email-verification-response';
import { Router } from '@angular/router';
import { InputError } from '../input-error/input-error';

@Component({
  selector: 'lib-send-email-verification',
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
    this._router.navigate(['/verify-otp'],{queryParams:{email:data.email}}
    );
    },
    error:(err)=>{
      this.errorMessage=err;
    }
  })

}
}
