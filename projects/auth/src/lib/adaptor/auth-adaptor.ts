import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adapt';

@Injectable({
  providedIn: 'root',
})
export class AuthAdaptor implements Adaptor{
  adapt(data:any):any{
    return{
      message:data.message,
      token:data.token,
      email:data.user.email
    }

  }

}
