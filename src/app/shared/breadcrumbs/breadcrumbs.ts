import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { filter } from 'rxjs';
@Component({
  selector: 'app-breadcrumbs',
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  items: MenuItem[] = [];
  private _router=inject(Router);
  
  ngOnInit(){
    this._router.events.pipe(
      filter(event=>event instanceof NavigationEnd)).subscribe(()=>{
        this.buildBreadcrumb();

      });
      this.buildBreadcrumb();
  }
    buildBreadcrumb(){
      const url=this._router.url.split('/').filter(x=>x);
      this.items=url.map((segment,index)=>{
        return{
          label:segment,
          routerLink:'/'+url.slice(0,index+1).join('/')
        };
      });
    }

 
}
