import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _loginService:LoginService, private _router:Router){}

  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  submit(){
    console.log(this.loginForm);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Login Successfully");
        this._router.navigateByUrl("/dashboard");
        sessionStorage.setItem('token',data.token);
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }
}
