import { Component, inject } from '@angular/core';
import { Diploma } from '../../interfaces/diploma-response';
import { DiplomasService } from '../../services/diplomas-service';
import { CommonModule } from '@angular/common';
import { Breadcrumbs } from "../../../../shared/components/breadcrumbs/breadcrumbs";
import { RouterModule } from '@angular/router';
import { PageTitle } from "../../../../shared/components/page-title/page-title";
import { GraduationCap } from 'lucide-angular';

@Component({
  selector: 'app-diplomas',
  imports: [CommonModule, Breadcrumbs, RouterModule, PageTitle],
  templateUrl: './diplomas.html',
  styleUrl: './diplomas.css',
})
export class Diplomas {
  readonly GraduationCap =GraduationCap ;
  diplomas:Diploma[]=[];
  errorMessage:string='';


  private _diplomasService=inject(DiplomasService);

  ngOnInit(){
    this.getAllDiplomas();
  
    


  }
  getAllDiplomas(){
    this._diplomasService.getAllDiplomas().subscribe({
      next:(data)=>{
        this.diplomas=data.data;
        this.errorMessage='';
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    })

  }
   
   


}
