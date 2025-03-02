import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  
   const ngxSpinnerService =inject(NgxSpinnerService)
  
  //  if( req.url.includes('products') && req.url.includes('categories') ){
  //  ngxSpinnerService.show('loading2')

  //  } 
  
  //  else{

  //    ngxSpinnerService.show('loading1')
  //  }

     ngxSpinnerService.show('loading1')


  return next(req).pipe( finalize( ()=>{
    ngxSpinnerService.hide('loading1')
    //ngxSpinnerService.hide('loading2')

  } ) )  ;
};
