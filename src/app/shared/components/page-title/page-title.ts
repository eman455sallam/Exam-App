import { Component, Input} from '@angular/core';
import {  LucideAngularModule ,GraduationCap } from 'lucide-angular';
@Component({
  selector: 'app-page-title',
  imports: [LucideAngularModule],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css',
})
export class PageTitle {
readonly GraduationCap=GraduationCap;
@Input()title:string='Diplomas';
@Input() icon:any='GraduationCap';

}
