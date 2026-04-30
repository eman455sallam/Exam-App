import { Routes } from '@angular/router';
import { DiplomasLayout } from './layouts/diplomas-layout/diplomas-layout';
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
        
      { path: ':id',
        component: DiplomaDetails ,
        data: { breadcrumb: 'Details' } 
        }

    
      
    ]
  }
];