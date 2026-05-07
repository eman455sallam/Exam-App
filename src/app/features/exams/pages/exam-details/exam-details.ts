import { Component} from '@angular/core';
import { Breadcrumbs } from "../../../../shared/components/breadcrumbs/breadcrumbs";
import { BackArrow } from "../../../../shared/components/back-arrow/back-arrow";
import { PageTitle } from "../../../../shared/components/page-title/page-title";
import { CircleQuestionMark } from 'lucide-angular';
import { ExamNavigationButton } from '../../components/exam-navigation-button/exam-navigation-button';

@Component({
  selector: 'app-exam-details',
  imports: [Breadcrumbs, BackArrow, PageTitle ,ExamNavigationButton],
  templateUrl: './exam-details.html',
  styleUrl: './exam-details.css',

})
export class ExamDetails  {
    readonly CircleQuestionMark=CircleQuestionMark;

    


}
