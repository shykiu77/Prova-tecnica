import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clientes.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

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

  salvar(): void {
    this.ClientesService.update(this.cliente).subscribe( () => {
      this.router.navigate(['clientes'])
    })
  }

  cancelar(): void {
    this.router.navigate(['clientes'])
  }

}
