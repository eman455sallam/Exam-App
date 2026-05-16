import { Component, inject, OnInit } from '@angular/core';
import { Breadcrumbs } from "../../../../shared/components/breadcrumbs/breadcrumbs";
import { BackArrow } from "../../../../shared/components/back-arrow/back-arrow";
import { PageTitle } from "../../../../shared/components/page-title/page-title";
import { CircleQuestionMark } from 'lucide-angular';
import { ExamsService } from '../../services/exams-service';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../../interfaces/exam-response';
import { ExamNavigationButton } from "../../components/exam-navigation-button/exam-navigation-button";
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as examSelectors from '../../store/exam.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-exam-result',
  imports: [Breadcrumbs, BackArrow, PageTitle, ExamNavigationButton,AsyncPipe, CommonModule ],
  templateUrl: './exam-result.html',
  styleUrl: './exam-result.css',
})
export class ExamResult implements OnInit {
    readonly CircleQuestionMark=CircleQuestionMark;
    private _examService = inject(ExamsService);
     private _activatedRoute = inject(ActivatedRoute);
       private _store = inject(Store);
     
    examDetails!:Exam;
    errorMessage!:string;


    submission$ = this._store.select(examSelectors.submissionResult);
    progress$=this.submission$.pipe(
      map(sub=>{
        if(!sub) return 0;
        return (sub.score/sub.totalQuestions)*100;
      })
    )
    // buttons
    restart(){

    }
    explore(){

    }

   ngOnInit():void {
        const examId=this._activatedRoute.snapshot.paramMap.get('id');
        if(!examId) return;
  
        this._examService.getExamById(examId).subscribe({
          next:(res)=>{
            this.examDetails=res;
          },
          error:(error)=>{
            this.errorMessage=error;
          }
  
        });
          
        
   }

}
