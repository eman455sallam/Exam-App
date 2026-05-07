import { Routes } from '@angular/router';
import { DiplomasLayout } from '../../layout/diplomas-layout/diplomas-layout';
import { Diplomas } from './components/diplomas/diplomas';
import { DiplomaDetails } from './components/diploma-details/diploma-details';


export const DIPLOMAS_ROUTES: Routes = [
  {
    path:'',
    component:DiplomasLayout,
    data: { breadcrumb: 'Diplomas' } ,
    children:[
      {path:'',
        component:Diplomas,
  
      },
        
      { 
        path: ':diplomaId/exams',
         data: { breadcrumb: 'Exams' },
        loadChildren: () =>
          import('../exams/exams.routes').then(m => m.EXAMS_ROUTES),

      }
      
    ]
  }
];