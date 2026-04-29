import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token=localStorage.getItem('token');
  if(token){

    const clonedRquest=req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });
    return next(clonedRquest);
  }
  return next(req);
};
