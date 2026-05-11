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
import { combineLatest, map } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-exam-details',
  imports: [Breadcrumbs, BackArrow, PageTitle ,ExamNavigationButton,AsyncPipe],
  templateUrl: './exam-details.html',
  styleUrl: './exam-details.css',

})
export class ExamDetails implements OnInit {
   
    readonly CircleQuestionMark=CircleQuestionMark;
    private _store = inject(Store);
    private _activatedRoute = inject(ActivatedRoute);
    selectedAnswerId :string | null =null;
    
    selectedAnswer(id:string){
      this.selectedAnswerId=id;

    }
    // Selectors
    questions$=this._store.select(examSelectors.selectAllQuestions);
    currentIndex$=this._store.select(examSelectors.selectCurrentIndex);
    answers$=this._store.select(examSelectors.selectAnswers);

    // current question
    currentQuestion$=combineLatest([this.questions$,this.currentIndex$]).pipe(
      map(([questions,index])=> questions[index] )
      
    )
    // Dispatch actions
    prevQuestion(){
      this._store.dispatch(examActions.prevQuestion());

    }
    nextQuestion(){
            this._store.dispatch(examActions.nextQuestion());

    }


    ngOnInit():void {
      const examId=this._activatedRoute.snapshot.paramMap.get('examId');
      if(examId){
        this._store.dispatch(examActions.loadQuestions({
        examId
      }));

      }
      
    }
   



    
    


}
