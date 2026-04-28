import { Component, inject } from '@angular/core';
import { LucideAngularModule, MoveLeft} from 'lucide-angular';
import { RouterLink , ActivatedRoute} from '@angular/router';
import { AuthRedirect} from 'auth';

@Component({
  selector: 'app-check-email',
  imports: [AuthRedirect, LucideAngularModule,LucideAngularModule,RouterLink],
  templateUrl: './check-email.html',
  styleUrl: './check-email.css',
})
export class CheckEmail {
    readonly MoveLeft=MoveLeft;
   email: string="";
   private _route=inject(ActivatedRoute)
   
   ngOnInit(){
    // Getting email 
    this._route.queryParams.subscribe(params=>{ 
      this.email=params['email']
    });
   }

}
