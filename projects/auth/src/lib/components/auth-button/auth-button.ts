import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-auth-button',
  imports: [],
  templateUrl: './auth-button.html',
  styleUrl: './auth-button.css',
})
export class AuthButton {
 @Input() label: string = 'Login';
 @Input() disabled:boolean=false;
}
