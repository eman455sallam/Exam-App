import { Routes } from '@angular/router';
import { DiplomasLayout } from './layouts/diplomas-layout/diplomas-layout';
import { Diplomas } from './components/diplomas/diplomas';


export const DIPLOMAS_ROUTES: Routes = [
  {
    path:'',
    component:DiplomasLayout,
    children:[
      {path:'',component:Diplomas},
      
    ]
  }
];