import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import { AuthService } from '../../../../../../projects/auth/src/lib/services/auth-service';
import { RegisterButton } from '../../../../../../projects/auth/src/lib/components/register-button/register-button';
import { InputError } from '../../../../../../projects/auth/src/lib/components/input-error/input-error';
@Component({
  selector: 'register',
  imports: [RegisterButton ,CommonModule,ReactiveFormsModule,NgxIntlTelInputModule,InputError],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

   registerForm!: FormGroup;
   errorMessage:string='';
   selectedCountryCode = '';
   email:string='';
    private _authService=inject(AuthService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb=inject(FormBuilder);

  ngOnInit() {
       this.registerForm = this._fb.group({

        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        phone: ['', Validators.required],

});
       //Getting Email
       this._route.queryParams.subscribe(params=>{
        this.email=params['email']
       })
      this.registerForm.valueChanges.subscribe(()=>{
        this.errorMessage='';
      })


}

onRegisterSubmit() {
  if(this.registerForm.invalid) return;

  this._authService.updateRegisterData({
    firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        username: this.registerForm.value.username,
        phone:this.registerForm.value.phone.e164Number,
        email:this.email
  })
   console.log(this._authService.registerData)
  this._router.navigate(['/auth/create-password'])
}

}
