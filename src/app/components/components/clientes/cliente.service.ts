import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { Router } from '@angular/router';

@Injectable()
export class ClienteService {

  private urlEndPoint:string= 'http://localhost:8080/api/clientes'

  // private httpheaders = new HttpHeaders({'Content-Type':'Application/json'});

  constructor(private http: HttpClient,private router: Router) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);

  }

  // private agregarAuthorizationHeader(){
  //   let token= this.authservice.token;
  //   if(token != null){
  //     return this.httpheaders.append('Authorization','Bearer '+ token);
  //   }
  //   return this.httpheaders;
  // }

  // private isNoAutorizado(e): boolean{
  //   if(e.status == 401){
  //     if(this.authservice.isAuthenticated()){
  //       this.authservice.logout();
  //     }
  //       this.router.navigate(['/login']);
  //        return true;
  //   }
  //   if(e.status == 403){
  //     Swal.fire({
  //       type: 'error',
  //       title: 'Hola '+ this.authservice.usuario.nombre,
  //       text: 'has cerrado sesión correctamente!'
  //     })
  //     this.router.navigate(['/clientes']);
  //      return true;
  // }
  // return false
  // }
}
