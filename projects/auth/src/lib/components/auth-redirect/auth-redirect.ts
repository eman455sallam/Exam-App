import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-redirect',
  imports: [RouterLink],
  templateUrl: './auth-redirect.html',
  styleUrl: './auth-redirect.css',
})
export class AuthRedirect {
 @Input() label: string = 'create yours?';
  @Input() link: string = '/register';
  @Input() redirectLabel:string='Don’t have an account?';

}
