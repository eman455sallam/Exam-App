import { Component, input, Input } from '@angular/core';
import { LucideAngularModule,ChevronRight } from 'lucide-angular';

@Component({
  selector: 'lib-register-button',
  imports: [LucideAngularModule],
  templateUrl: './register-button.html',
  styleUrl: './register-button.css',
})
export class RegisterButton {
readonly ChevronRight=ChevronRight;
@Input() label:string='Next';
@Input() disabled:boolean=false;
}
