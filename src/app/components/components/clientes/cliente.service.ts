import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import {map} from 'rxjs/operators'
@Injectable()
export class ClienteService {

  private urlEndPoint:string= 'http://localhost:8080/api/clientes'

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);

  }
}
