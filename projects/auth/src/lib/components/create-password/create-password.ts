import { Component, inject } from '@angular/core';
import { AuthButton } from '../auth-button/auth-button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputError } from "../input-error/input-error";
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth-service';
import { passwordMatchValidator } from '../../validators/password-match.validators';
import { RegisterRequest } from '../../interfaces/register-request';
@Component({
  selector: 'app-create-password',
  imports: [AuthButton, ReactiveFormsModule, InputError,PasswordModule ],
  templateUrl: './create-password.html',
  styleUrl: './create-password.css',
})
export class CreatePassword {

  createPasswordForm!: FormGroup;
  errorMessage:string='';

   private _authService=inject(AuthService);
    private _router = inject(Router);
    private _fb=inject(FormBuilder);

 ngOnInit() {
  this.createPasswordForm=this._fb.group({
     password:['',[Validators.required ,Validators.minLength(8)]],
     confirmPassword:['',Validators.required] ,

  },
  {
      validators:passwordMatchValidator
     })

      this.createPasswordForm.valueChanges.subscribe(()=>{
      this.errorMessage='';
      // Clear backend error message when user starts typing again as email already exist
    });


 }
 onCreatePasswordFormSubmit(){
  if(this.createPasswordForm.invalid) return;

  this._authService.updateRegisterData({
    password:this.createPasswordForm.value.password,
    confirmPassword:this.createPasswordForm.value.confirmPassword

  });
  const finalData=this._authService.getRegisterRequest();
   console.log(finalData);
   this._authService.register(finalData).subscribe({
    next: () => {

      this._router.navigate(['/login']);
    },
    error: (err) => {
      this.errorMessage = err;
    }
  });
}
}
