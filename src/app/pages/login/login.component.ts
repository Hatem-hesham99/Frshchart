import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../core/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink,TranslatePipe ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{


  
    private readonly authService = inject(AuthService)
    private readonly router = inject(Router)
    private readonly formBuilder =inject(FormBuilder)
    isloading:boolean=false;
    errorMessage:string=''
    cancelLogin!:Subscription
  
    login:FormGroup = this.formBuilder.group({
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required, Validators.pattern(/^[A-Z]\w{6,}$/)]]
    })

    // login:FormGroup = new FormGroup({
    //   email:new FormControl(null,[
    //     Validators.required,
    //     Validators.email
    //   ]),
    //   password:new FormControl(null,[
    //     Validators.required,
    //     Validators.pattern(/^[A-Z]\w{6,}$/)
    //   ]),
      
    // })
  

  
    submitForm(){
      if(this.login.valid){
        this.isloading = true
        this.cancelLogin=  this.authService.loginForm(this.login.value).subscribe({
            next:(res)=>{
              if( res.message =="success"){
                //console.log(res)
              this.errorMessage = res.message
              localStorage.setItem('token',res.token);
               
               this.authService.saveUserData();
              
              setTimeout(() => {
                this.router.navigate(['/home'])
              },500 );
              this.isloading = false
              }
            },
            error:(err)=>{
              console.log(err);
              this.errorMessage = err.error.message
              this.isloading = false
            }
           
          })
       }else{
        this.login.markAllAsTouched()
      }

      
     }
  
     ngOnDestroy(): void {
      this.cancelLogin.unsubscribe()
     }


}
