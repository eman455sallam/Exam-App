import { Injectable } from '@angular/core';
import { LoginPayload, LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root',
})
export class LoginAdaptor{
  adapt(data:LoginResponse):LoginPayload{
    return {
      token:data.payload.token,
      user:{...data.payload.user}
      //{...d.p.u} Create a new copy of the user object &&& data.payload.user
      // This ensures that any modifications to this object in the application
      // do not affect the original response returned from the server
    }
  }
}
