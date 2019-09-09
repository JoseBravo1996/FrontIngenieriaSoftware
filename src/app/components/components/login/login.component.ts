import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario } from '../usuarios/usuario';
import {AuthService} from '../usuarios/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario:Usuario;

  constructor(private authService: AuthService,private router:Router) {
    this.usuario=new Usuario();
   }

  ngOnInit() {
   
  }

  login():void{
    console.log(this.usuario);
    if(this.usuario.username == null || this.usuario.password == null){
      window.alert("Login error nuevo");
      return;
    }

  this.authService.login(this.usuario).subscribe(response => {
    console.log(response);
  
    this.authService.guardarUsuario(response.access_token);
    this.authService.guardarToken(response.access_token);
    let usuario = this.authService.usuario;
    this.router.navigate(['/home']);
    console.log("login bien"+usuario.nombre);
  });
  }
}
