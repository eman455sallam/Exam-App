import { Component } from '@angular/core';
import { AuthButton } from '../../../shared/components/auth-button/auth-button';
import { AuthRedirect } from '../../../shared/components/auth-redirect/auth-redirect';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-password',
  imports: [AuthButton ,AuthRedirect ,ReactiveFormsModule
  ],
  templateUrl: './create-password.html',
  styleUrl: './create-password.css',
})
export class CreatePassword {

  resetPasswordForm!: FormGroup;
constructor(private fb:FormBuilder ,private router:Router){}
 ngOnInit() {
  this.resetPasswordForm=this.fb.group({
     newPassword:['',Validators.required],
     confirmNewPassword:['',Validators.required]

  })

 }
 onResetPasswordFormSubmit() {
  this.router.navigate(['/login'])
}
}
