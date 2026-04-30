import { Component } from '@angular/core';
import { ChevronLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-back-arrow',
  imports: [LucideAngularModule],
  templateUrl: './back-arrow.html',
  styleUrl: './back-arrow.css',
})
export class BackArrow {
  readonly ChevronLeft=ChevronLeft;

}
