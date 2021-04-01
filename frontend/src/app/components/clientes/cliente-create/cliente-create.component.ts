import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../clientes.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    cpf: '',
    nome: '',
    sexo: '',
    dat_nasc: '',
    email: '',
    phone: '',
    favorite: false
  }



  constructor(private ClientesService: ClientesService,private router: Router) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.ClientesService.create(this.cliente).subscribe( () => {
      this.router.navigate(['clientes'])
    })
  }

  cancelar(): void {
    this.router.navigate(['clientes'])
  }

}
