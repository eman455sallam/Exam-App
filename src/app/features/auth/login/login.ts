import { Component } from '@angular/core';
import { AuthButton } from '../../../shared/components/auth-button/auth-button';
import { AuthRedirect } from '../../../shared/components/auth-redirect/auth-redirect';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [AuthButton, AuthRedirect, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

   loginForm!: FormGroup;
    constructor(private fb: FormBuilder) {}
    ngOnInit() {
     this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],

    });

    }
    onLoginSubmit() {
    console.log("eman")}


}

