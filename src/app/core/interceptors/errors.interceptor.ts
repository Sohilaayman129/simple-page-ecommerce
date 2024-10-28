
import { HttpInterceptorFn } from '@angular/common/http';

import { catchError, throwError } from 'rxjs';

import Swal from 'sweetalert2';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {


  return next(req).pipe(  catchError((err)=>{
         console.log( 'interceptor'  , err.error.message) 


         Swal.fire({
          title:'Oops!',
          text: err.error.message ,
          icon: 'error',
          confirmButtonText: 'Okay '
        })

   
    
           

    return throwError(()=> err)
  }))    ;
};
