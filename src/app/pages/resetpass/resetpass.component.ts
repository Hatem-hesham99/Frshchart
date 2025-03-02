import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-resetpass',
  imports: [ReactiveFormsModule  ],
  templateUrl: './resetpass.component.html',
  styleUrl: './resetpass.component.css'
})
export class ResetpassComponent {

  step:number=1;
  isloading:boolean = false;
  errormassage:string = ''
  constructor(private authService:AuthService){}
  private readonly formBuilder =inject(FormBuilder)
  private readonly router=inject(Router)

  forgetPassword:FormGroup = this.formBuilder.group({
    email:[null,[Validators.required,Validators.email]]
  })

  getPassword(){
    if(this.forgetPassword.valid){
      // set value email to step 3 ==>
       this.resetPassword.get('email')?.patchValue( this.forgetPassword.get('email')?.value)  
      this.isloading = true
      this.authService.forgotPassAPI(this.forgetPassword.value).subscribe({
        next:(res)=>{
          console.log(res);
           if(res.statusMsg == 'success'){
             this.step=2
             this.errormassage=''
           }
          this.isloading=false
        },
        error:(err)=>{
          console.log(err.error.message);
          this.errormassage = err.error.message
          
          this.isloading=false
          
        }
      })
    }   
  }

  verifyCode:FormGroup = this.formBuilder.group({
    resetCode:[null,[Validators.required,Validators.pattern(/^\w{6}$/)]]
  })

  getverifyCode(){
    if(this.verifyCode.valid){
      this.isloading = true
      this.authService.verifyCodeAPI(this.verifyCode.value).subscribe({
        next:(res)=>{
          console.log(res);
          if(res.status =='Success'){
             this.step=3
             this.errormassage=''
             this.isloading = false

          }
          
        },
        error:(err)=>{
          console.log(err);
          this.errormassage = err.error.message
          this.isloading = false

        }
      })

    }
  }

  resetPassword:FormGroup = this.formBuilder.group({
    email:[null],
    newPassword:[null, [ Validators.pattern(/^[A-Z]\w{6,}$/)  ]  ]
  })
  getresetPassword(){
    if(this.resetPassword.valid){
      this.authService.resetPassAPI(this.resetPassword.value).subscribe({
        next:(res)=>{
          localStorage.setItem('token', res.token )
          this.authService.saveUserData()
          this.router.navigate(['/home'])
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
   
  }
}
