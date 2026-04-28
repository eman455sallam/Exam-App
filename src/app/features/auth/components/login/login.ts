import { LoginPayload, InputError } from 'auth';
import { LoginRequest } from 'auth';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CircleX } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { AuthButton } from 'auth';
import { AuthRedirect } from 'auth';
import { AuthService } from 'auth';

@Component({
  selector: 'login',
  imports: [AuthButton, AuthRedirect, ReactiveFormsModule, CommonModule, LucideAngularModule, RouterLink, InputError],
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
