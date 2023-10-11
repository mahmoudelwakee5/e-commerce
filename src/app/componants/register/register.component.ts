import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

 constructor(private _AuthService:AuthService , private _Router:Router ,private _FormBuilder:FormBuilder){}
errMsg :string =' ';
isLoading:boolean =false;

registerForm:FormGroup = this._FormBuilder.group({
  name:['',[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]],
  email:['',[Validators.required ,Validators.email ]],
  password:['',[Validators.required ,Validators.pattern(/^\w{6,}$/) ]],
  rePassword:[''],
  phone:['',[Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]] ,

} ,{validators:[this.confermPassword]} as FormControlOptions )

  // registerForm:FormGroup =new FormGroup({
  //   name:new FormControl ('',[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
  //   email:new FormControl ('',[Validators.required ,Validators.email ]),
  //   password:new FormControl ('',[Validators.required ,Validators.pattern(/^\w{6,}$/) ]),
  //   rePassword:new FormControl (''),
  //   phone:new FormControl ('',[Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  // }  ,{validators:[this.confermPassword]} as FormControlOptions  );  

  confermPassword(Group:FormGroup):void{
    const Password = Group.get('password');
    const rePassword = Group.get('repassword');

    if(rePassword?.value == ''){
      rePassword?.setErrors({ requierd:true})
    }else if (Password?.value != rePassword?.value) {
      rePassword?.setErrors({mismatch:true})
     }    
    }


    handelForm(): void {
      // console.log(this.registerForm.value);
      const userData = this.registerForm.value;
      this.isLoading = true;

      if(this.registerForm.valid === true){
       
        this._AuthService.register(userData).subscribe({
          next:(response)=>{
           
            if(response.message === "success"){
              this.isLoading = false;
             this._Router.navigate(['/login'])
            }
          },
          error: (err)=>{
            this.errMsg = err.error.message
            this.isLoading = false;
          },
        });
      }
    }
  }


