import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { LucideAngularModule, FolderCode ,GraduationCap,UserRound, EllipsisVertical } from 'lucide-angular';

@Component({
  selector: 'app-diplomas-layout',
  imports: [RouterOutlet,LucideAngularModule,RouterLink, RouterLinkActive],
  templateUrl: './diplomas-layout.html',
  styleUrl: './diplomas-layout.css',
})
export class DiplomasLayout {
  readonly FolderCode = FolderCode;
  readonly GraduationCap =GraduationCap;
  readonly UserRound =UserRound;
  readonly EllipsisVertical=EllipsisVertical;


}
