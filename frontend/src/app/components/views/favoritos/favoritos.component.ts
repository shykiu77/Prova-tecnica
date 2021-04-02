import { ClientesService } from './../../clientes/clientes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../clientes/clientes.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  clientes: Cliente[] = []
  displayedColumns: string[] = ['cpf', 'nome', 'sexo', 'dat_nasc', 'email', 'phone', 'action']
  dataSource!: MatTableDataSource<Cliente>

  constructor(private ClientesService: ClientesService) { }

  ngOnInit(): void {
    this.ClientesService.readFavorites().subscribe(clientes => {
      this.clientes = clientes
      this.dataSource = new MatTableDataSource<Cliente>(this.clientes)
      this.dataSource.paginator = this.paginator;
    })
  }

  toggleFavorite(cliente: Cliente): void {
    cliente.favorite = !cliente.favorite
    this.ClientesService.update(cliente).subscribe(() => {
      this.clientes = this.clientes.filter(clientes => clientes !== cliente)
      this.table.renderRows()
    })

  }

}
