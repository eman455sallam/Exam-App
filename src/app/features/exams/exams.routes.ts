import { Routes } from "@angular/router";
import { ExamsList } from "./pages/exams-list/exams-list";
import { ExamDetails } from "./pages/exam-details/exam-details";
import { ExamResult } from "./pages/exam-result/exam-result";


export const EXAMS_ROUTES:Routes=[
{
    path: '',
    component: ExamsList,
    data: { breadcrumb: 'Exams' },
  },
  {
    path: ':examId',
    component: ExamDetails,
    data: { breadcrumb: 'Exam Details' },
  },
   {
    path: 'result/:id',
    component: ExamResult,
  }
    ];
     
