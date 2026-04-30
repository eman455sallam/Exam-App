import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {  Observable } from 'rxjs';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-breadcrumbs',
  imports: [BreadcrumbModule,AsyncPipe],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  items$!: Observable<MenuItem[]>;
  private _breadcrumbService=inject(BreadcrumbService);
  
  ngOnInit(){
        this.items$ = this._breadcrumbService.breadcrumbs$;

    
  }
    

 
}
