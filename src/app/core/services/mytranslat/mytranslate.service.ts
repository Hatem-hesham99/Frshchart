import { isPlatformBrowser } from '@angular/common';
import {  inject, Inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class MytranslateService {

  private readonly render2 = inject(RendererFactory2).createRenderer(null,null)

  constructor( private  translateService:TranslateService , @Inject(PLATFORM_ID) private id:object  ) {


    if(isPlatformBrowser(id)){
      translateService.setDefaultLang("en")

      //get lang from localstorage
      
      const saveLang= localStorage.getItem('lang')
      //use lang
      if( saveLang ){
        translateService.use(saveLang!)
      }
      this.changeDiraction()
    }

   
   }//end constructor
  
  
   changeDiraction(){

    if( localStorage.getItem('lang') === "en" ){
      this.render2.setAttribute(document.documentElement , 'dir' , 'ltr')
      this.render2.setAttribute(document.documentElement , 'lang','en')

    }if (localStorage.getItem('lang') === 'ar') {
      this.render2.setAttribute(document.documentElement , 'dir' , 'rtl')
      this.render2.setAttribute(document.documentElement , 'lang' , 'ar')

    } 

   }



   changmylanguage( lang:string ):void {

    localStorage.setItem("lang", lang )
    this.translateService.use(lang)
    this.changeDiraction()

   }

}
