import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
