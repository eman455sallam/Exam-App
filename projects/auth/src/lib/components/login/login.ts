import { Component, inject } from '@angular/core';
import { AuthButton } from '../auth-button/auth-button';
import { AuthRedirect } from '../auth-redirect/auth-redirect';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { LoginRequest } from '../../interfaces/login-request';
import { LoginPayload } from '../../interfaces/login-response';
import { LucideAngularModule, CircleX } from 'lucide-angular';


@Component({
  selector: 'app-login',
  imports: [AuthButton, AuthRedirect, ReactiveFormsModule, CommonModule,LucideAngularModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   readonly CircleX=CircleX;
   loginForm!: FormGroup;
   errorMessage:string='';

   private _fb=inject(FormBuilder);
   private _authService=inject(AuthService);

    ngOnInit() {
     this.loginForm = this._fb.group({
      username:['',Validators.required],
      password:['',Validators.required],

    });

    }
    onLoginSubmit(){
      const data:LoginRequest=this.loginForm.value;
      this._authService.login(data).subscribe({
        next:(res:LoginPayload)=>{
          localStorage.setItem('token',res.token);
          this.errorMessage = '';
          this._authService.redirectAfterLogin();
        },
        error:(err)=>{
          this.errorMessage = err;
        }
      })
  }


}

