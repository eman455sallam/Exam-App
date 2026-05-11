import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';


@Component({
  selector: 'app-exam-navigation-button',
  imports: [CommonModule , LucideAngularModule],
  templateUrl: './exam-navigation-button.html',
  styleUrl: './exam-navigation-button.css',
})
export class ExamNavigationButton {
@Input() label='Next';
@Input() variant :'primary'| 'secondary'='primary';
@Input() direction: 'next' | 'previous' = 'next';
@Input() disabled = false;


readonly ChevronLeft=ChevronLeft;
readonly ChevronRight=ChevronRight;
}
