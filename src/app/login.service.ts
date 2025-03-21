import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean=false;
  id:any;
  constructor( private _httpClient:HttpClient, private _router:Router) { 
    this.id=sessionStorage.getItem('token');
    if(this.id){
      this.isLoggedIn=true;
    }
  }
  login(data:any):Observable<any>{
    return this._httpClient.post("https://reqres.in/api/login",data)
  }

  logout(){
    sessionStorage.removeItem('token');
    alert("Logout successfully");
    this._router.navigateByUrl("/login");
  }
}
