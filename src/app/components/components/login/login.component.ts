import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  Username:string = "";
  Password:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickSubmit(){
    if(this.Username == "jose@gmail.com" && this.Password=="1234"){
      this.router.navigate(["/dashboard"]);
    }
    else{
      window.alert("Login Failed");
    }

  }

}
