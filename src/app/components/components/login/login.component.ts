import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario } from '../usuarios/usuario';
import {AuthService} from '../usuarios/auth.service';
import Swal from 'sweetalert2';
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
   if(this.authService.isAuthenticated()){
    Swal.fire({
      type: 'info',
      title: 'Hola ' + this.usuario.nombre,
      text: 'Ya estas autentificado!'
    })
    this.router.navigate(['/home']);
   }
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
   Swal.fire({
        type: 'success',
        title: 'Bienvenido '+ usuario.nombre,
        text: 'has inciado sesión correctamente!'
      })
  },
  err => {
    if(err.status == 400){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Usuario o clave incorrectas!'
      })
    }
  });
  }
}
