import { Component, inject } from '@angular/core';
import { Diploma } from '../../interfaces/diploma-response';
import { DiplomasService } from '../../services/diplomas-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diplomas',
  imports: [CommonModule],
  templateUrl: './diplomas.html',
  styleUrl: './diplomas.css',
})
export class Diplomas {
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
        console.log(data)
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    })

  }

}
