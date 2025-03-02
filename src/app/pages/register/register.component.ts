import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { group } from 'node:console';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule, TranslatePipe ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  
  isloading:boolean=false;
  errorMessage:string=''

  //---new syntacs----- 
  private readonly x = inject(FormBuilder)
  // register = this.x.group({
  //   name: [null,[ Validators.required,
  //          Validators.minLength(3),
  //          Validators.maxLength(20) ]],
  //   email:[null,[Validators.required, Validators.email  ]],       
  //   password:[null,[ Validators.required, Validators.pattern(/^[A-Z]\w{6,}$/)]],  
  //   rePassword:[null,[ Validators.required, Validators.pattern(/^[A-Z]\w{6,}$/)]],  
  //   phone:[null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]  
  // }, {validators: this.confarmPass }   )

  register:FormGroup = new FormGroup({
    name: new FormControl(null,[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email:new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl(null,[
      Validators.required,
      Validators.pattern(/^[A-Z]\w{6,}$/)
    ]),
    rePassword: new FormControl(null,[
      Validators.required,
      Validators.pattern(/^[A-Z]\w{6,}$/)
    ]),
    phone: new FormControl(null,[
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)
    ]),
  }  ,{ validators : this.confarmPass  } )

  confarmPass( control:AbstractControl ){
     return control.get('password')?.value === control.get('rePassword')?.value ? null : { mismatch:true };
  }

  submitForm(){
    if(this.register.valid){
      this.isloading = true
        this.authService.registerForm(this.register.value).subscribe({
          next:(res)=>{
            if( res.message =="success"){
            this.errorMessage = res.message
            setTimeout(() => {
              this.router.navigate(['/login'])
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
     }
    
   }



}
