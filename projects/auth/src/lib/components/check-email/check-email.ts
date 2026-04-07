import { Component } from '@angular/core';
import { AuthRedirect } from "../auth-redirect/auth-redirect";
import { LucideAngularModule, MoveLeft } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-email',
  imports: [AuthRedirect, LucideAngularModule,LucideAngularModule,RouterLink],
  templateUrl: './check-email.html',
  styleUrl: './check-email.css',
})
export class CheckEmail {
    readonly MoveLeft=MoveLeft;
email: string="user@example.com";


}
