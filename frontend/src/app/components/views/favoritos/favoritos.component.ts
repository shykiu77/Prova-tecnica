import { ClientesService } from './../../clientes/clientes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../clientes/clientes.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>

  clientes: Cliente[] = []
  displayedColumns: string[] = ['cpf','nome','sexo','dat_nasc','email','phone','action']

  constructor(private ClientesService: ClientesService) { }

  ngOnInit(): void {
    this.ClientesService.readFavorites().subscribe(clientes => {
      this.clientes = clientes
    })
  }

  toggleFavorite(cliente: Cliente): void {
    cliente.favorite = !cliente.favorite
    this.ClientesService.update(cliente).subscribe( () => {
      this.clientes = this.clientes.filter(clientes => clientes !== cliente)
      this.table.renderRows()
    })

  }

}
