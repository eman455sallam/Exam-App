import { Injectable } from '@angular/core';
import { RegisterRequest } from '../interfaces/register-request';
import { RegisterResponse, User } from '../interfaces/register-response';

@Injectable({
  providedIn: 'root',
})
export class RegisterAdaptor {
   adapt(data:RegisterResponse):User{
     return data.user
   }
}
