import { Component, inject, OnInit} from '@angular/core';
import { Breadcrumbs } from "../../../../shared/components/breadcrumbs/breadcrumbs";
import { BackArrow } from "../../../../shared/components/back-arrow/back-arrow";
import { PageTitle } from "../../../../shared/components/page-title/page-title";
import { CircleQuestionMark } from 'lucide-angular';
import { ExamNavigationButton } from '../../components/exam-navigation-button/exam-navigation-button';
import { Store } from '@ngrx/store';
import * as examSelectors from '../../store/exam.selectors';
import * as examActions from '../../store/exam.actions';
import { ActivatedRoute } from '@angular/router';
import {  combineLatest, map } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Exam } from '../../interfaces/exam-response';
import { ExamsService } from '../../services/exams-service';


@Component({
  selector: 'app-exam-details',
  imports: [Breadcrumbs, BackArrow, PageTitle ,ExamNavigationButton,AsyncPipe,CommonModule],
  templateUrl: './exam-details.html',
  styleUrl: './exam-details.css',

})
export class ExamDetails implements OnInit {
submitExam() {
throw new Error('Method not implemented.');
}
   
    readonly CircleQuestionMark=CircleQuestionMark;
    private _examService = inject(ExamsService);
    private _store = inject(Store);
    private _activatedRoute = inject(ActivatedRoute);
    examDetails!:Exam;
    errorMessage!:string;

    // Selectors
    questions$=this._store.select(examSelectors.selectAllQuestions);
    currentIndex$=this._store.select(examSelectors.selectCurrentIndex);
    answers$=this._store.select(examSelectors.selectAnswers);
    currentQuestion$=this._store.select(examSelectors.selectCurrentQuestion);
    currentAnswer$=this._store.select(examSelectors.selectCurrentAnswer);
    isLastQuestion$ = this._store.select(examSelectors.isTheLastQuestion);
    
    // Dispatch actions
    prevQuestion(){
      this._store.dispatch(examActions.prevQuestion());

    }
    nextQuestion(){
            this._store.dispatch(examActions.nextQuestion());

    }
    addingAnswer(questionId:string,answer:string){
      this._store.dispatch(examActions.answerQuestion({
        questionId,
        answer:answer
      }))

    }

    // Progress
    progress$=combineLatest([this.currentIndex$,this.questions$]).pipe(
      map(([index,questions])=>{
        if(!questions?.length) return 0;
         return ((index ?? 0)+1)/questions.length *100 ;

      })
    )

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
      
      this._store.dispatch(examActions.loadQuestions({
        examId
      }));

      
      
    }
   



    
    


}
