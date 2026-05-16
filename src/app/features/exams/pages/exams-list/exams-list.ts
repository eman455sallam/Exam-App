import { Component, inject } from '@angular/core';
import { Breadcrumbs } from "../../../../shared/components/breadcrumbs/breadcrumbs";
import { BackArrow } from "../../../../shared/components/back-arrow/back-arrow";
import { PageTitle } from "../../../../shared/components/page-title/page-title";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookOpenCheck, CircleQuestionMark, LucideAngularModule, MoveRight, Timer } from 'lucide-angular';
import { BreadcrumbService } from '../../../../shared/services/breadcrumb.service';
import { Exam, DiplomaDetailsModel } from '../../../diplomas/interfaces/diploma-details-response';
import { DiplomasService } from '../../../diplomas/services/diplomas-service';
import { ExamsService } from '../../services/exams-service';
import { ExamDiploma } from '../../interfaces/all-exams-response';

@Component({
  selector: 'app-exams-list',
  imports: [Breadcrumbs, PageTitle, BackArrow, LucideAngularModule, RouterLink],
  templateUrl: './exams-list.html',
  styleUrl: './exams-list.css',
})
export class ExamsList {
  readonly BookOpenCheck=BookOpenCheck;
  readonly CircleQuestionMark=CircleQuestionMark;
  readonly Timer=Timer;
  readonly MoveRight = MoveRight;

  exams!: Exam[];
  errorMessage:string='';
  diplomaDetails!:ExamDiploma;
  
  private _activatedRoute=inject(ActivatedRoute);
  private  _examsService = inject(ExamsService);
  private _breadcrumbService = inject(BreadcrumbService);


   
     ngOnInit(){
      this._activatedRoute.paramMap.subscribe(params=>{
        const id=params.get('diplomaId');
          if(id){
           this.getAllExams(id);
     
          }
      })
     }
     getAllExams(id:string){
       this._examsService.getAllExams(id).subscribe({
         next:(data)=>{
           this.exams=data.data;
           this.errorMessage='';
           const diploma = data.data[0].diploma;;
           this.diplomaDetails = diploma;
           this._breadcrumbService.setCustomBreadcrumb(diploma.title);
           
          
         },
         error:(err)=>{
           this.errorMessage=err;
         }
       })
   
     }
      
      
   
   


}
