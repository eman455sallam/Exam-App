import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthButton } from "../auth-button/auth-button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [AuthButton ,CommonModule,ReactiveFormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

   registerForm!: FormGroup;
    constructor(private fb: FormBuilder ,private router:Router) {}

  ngOnInit() {
       this.registerForm = this.fb.group({

        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
});

}
onRegisterSubmit() {
  this.router.navigate(['/login'])
}

}
