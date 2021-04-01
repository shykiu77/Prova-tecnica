import { Cliente } from './../clientes.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = []
  displayedColumns: string[] = ['cpf','nome','sexo','dat_nasc','email','phone','action']


  constructor(private ClientesService: ClientesService,private router: Router) { }

  ngOnInit(): void {
   this.ClientesService.read().subscribe(clientes => {
     this.clientes = clientes
   })
  }

  click(): void {
    this.router.navigate(['clientes/create'])
  }

}
