import { catchError } from 'rxjs';
import { Component, inject } from '@angular/core';
import { LucideAngularModule, MoveLeft } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  imports: [LucideAngularModule,ReactiveFormsModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOtp {

    readonly MoveLeft=MoveLeft;
    private _authService=inject(AuthService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb=inject(FormBuilder);

    email:string='user@emaple.com'
    otpForm!: FormGroup;
    errorMessage:string='';


    constructor(){}
    ngOnInit(){
      this.otpForm = this._fb.group({
      digit1: ['', Validators.required],
      digit2: ['', Validators.required],
      digit3: ['', Validators.required],
      digit4: ['', Validators.required],
      digit5: ['', Validators.required],
      digit6: ['', Validators.required],
    });

    // Getting email
    this._route.queryParams.subscribe(params=>{
      this.email=params['email']
    });
    // Clear backend error message when user starts typing again 
    this.otpForm.valueChanges.subscribe(()=>{
      this.errorMessage=''
    });


    }


    onOtpSubmit(){
      if(this.otpForm.invalid) return;
  
      const otpCode=Object.values(this.otpForm.value).join('');
      const data={
         email: this.email,
         code: otpCode
      }

      this._authService.verifyOtp(data).subscribe(({
        next:()=>{
          this._router.navigate(['/register'])
        },
        error:(err)=>{
          this.errorMessage=err
        }
      }));
  }


}
