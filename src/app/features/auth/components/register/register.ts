import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { AuthService } from 'auth';
import { RegisterButton } from 'auth';
import { InputError } from 'auth';
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
   SearchCountryField = SearchCountryField;
	 CountryISO = CountryISO;
   PhoneNumberFormat = PhoneNumberFormat;
   preferredCountries: CountryISO[] = [
  CountryISO.Egypt,
  CountryISO.SaudiArabia,
  CountryISO.UnitedArabEmirates
];
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
      const email = sessionStorage.getItem('auth_email');
     if (!email) {
        this._router.navigate(['/auth/send-email-verification']);
        return;
      }
      this.email = email;
      // Restore saved data
      const savedFormdata=sessionStorage.getItem('register_form');
      if(savedFormdata){
        this.registerForm.patchValue(JSON.parse(savedFormdata));
      }

      this.registerForm.valueChanges.subscribe((value)=>{
        sessionStorage.setItem('register_form',JSON.stringify(value));
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
