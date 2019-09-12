import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../usuarios/auth.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout():void{
    let usuario = this.authService.usuario.nombre;
    this.authService.logout();
    Swal.fire({
        type: 'success',
        title: 'Adios '+ usuario,
        text: 'has cerrado sesión correctamente!'
      })
      this.router.navigate(['/login']);

  }

}
