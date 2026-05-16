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
    examDetails!:Exam;
    errorMessage!:string;

    // buttons
    restart(){

    }
    explore(){

    }

   ngOnInit():void {
        const examId=this._activatedRoute.snapshot.paramMap.get('examId');
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
