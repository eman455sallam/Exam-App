import { Component } from '@angular/core';
import { AuthButton } from '../../../shared/components/auth-button/auth-button';
import { AuthRedirect } from '../../../shared/components/auth-redirect/auth-redirect';
import { LucideAngularModule, MoveLeft } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  imports: [AuthButton,AuthRedirect,LucideAngularModule,ReactiveFormsModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOtp {
  readonly MoveLeft=MoveLeft;
  email:string='user@emaple.com'
    otpForm!: FormGroup;
    constructor(private fb: FormBuilder){}
    ngOnInit(){
      this.otpForm = this.fb.group({
      digit1: ['', Validators.required],
      digit2: ['', Validators.required],
      digit3: ['', Validators.required],
      digit4: ['', Validators.required],
      digit5: ['', Validators.required],
      digit6: ['', Validators.required],
    });

    }
    onOtpSubmit(){
    console.log(this.otpForm.value);
  }


}
