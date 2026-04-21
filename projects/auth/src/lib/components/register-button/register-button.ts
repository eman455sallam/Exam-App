import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { LucideAngularModule,ChevronRight } from 'lucide-angular';
@Component({
  selector: 'lib-register-button',
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './register-button.html',
  styleUrl: './register-button.css',
})
export class RegisterButton {
readonly ChevronRight=ChevronRight;
@Input() label:string='Next';
@Input() disabled:boolean=false;
@Input() bgColor: string = 'bg-blue-50';
@Input() textColor: string = 'text-[#1F2937]';

}
