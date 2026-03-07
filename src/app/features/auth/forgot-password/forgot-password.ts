import { Component } from '@angular/core';
import { AuthButton } from "../../../shared/components/auth-button/auth-button";
import { AuthRedirect } from "../../../shared/components/auth-redirect/auth-redirect";
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  imports: [AuthButton, AuthRedirect, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  email: string = '';
  forgotPasswordForm!: FormGroup;
  constructor(private router: Router ,private fb: FormBuilder)  {}

      ngOnInit() {
     this.forgotPasswordForm = this.fb.group({
      email:['',Validators.required],

    });
  }
  onForgotPasswordSubmit() {
    this.router.navigate(['/check-email'], {
      queryParams: { email: this.email }
    });
  }


}
