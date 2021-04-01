import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clientes.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente = {
    cpf: '',
    nome: '',
    sexo: '',
    dat_nasc: '',
    email: '',
    phone: '',
    favorite: false
  }


  constructor(private ClientesService: ClientesService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.ClientesService.readById(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  deletar(): void {
    this.ClientesService.delete(`${this.cliente.id}`).subscribe( () => {
      this.router.navigate(['clientes'])
    })
  }

  cancelar(): void {
    this.router.navigate(['clientes'])
  }


}
