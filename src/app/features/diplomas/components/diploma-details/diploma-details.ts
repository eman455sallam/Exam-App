import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiplomasService } from '../../services/diplomas-service';
import { DiplomaDetailsModel, Exam } from '../../interfaces/diploma-details-response';
import { Breadcrumbs } from "../../../../shared/components/breadcrumbs/breadcrumbs";
import { BreadcrumbService } from '../../../../shared/services/breadcrumb.service';
import { PageTitle } from "../../../../shared/components/page-title/page-title";
import { BackArrow } from "../../../../shared/components/back-arrow/back-arrow";
import { BookOpenCheck, CircleQuestionMark, LucideAngularModule, Timer } from 'lucide-angular';

@Component({
  selector: 'app-diploma-details',
  imports: [Breadcrumbs, PageTitle, BackArrow, LucideAngularModule],
  templateUrl: './diploma-details.html',
  styleUrl: './diploma-details.css',
})
export class DiplomaDetails {
  readonly BookOpenCheck=BookOpenCheck;
  readonly CircleQuestionMark=CircleQuestionMark;
  readonly Timer=Timer;
  exams!: Exam[];
  errorMessage:string='';
  diplomaDetails!:DiplomaDetailsModel;
  
  private _activatedRoute=inject(ActivatedRoute);
  private  _diplomasService = inject(DiplomasService);
   private _breadcrumbService = inject(BreadcrumbService);


  ngOnInit(){
    const id=this._activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.getDiplomaById(id);
    }
  }
  
  private  getDiplomaById(id:string){
     this._diplomasService.getDiplomaById(id).subscribe({
        next:(data)=>{
           this.diplomaDetails=data;
           this.exams=data.exams;
           

           this._breadcrumbService.setCustomBreadcrumb(
              data.title
           );
        },error:(err)=>{
             this.errorMessage=err;

        }

    });

  }

}
