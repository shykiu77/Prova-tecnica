import { Cliente } from './../clientes.model';
import { ClientesService } from './../clientes.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  clientes: Cliente[] = []
  displayedColumns: string[] = ['cpf','nome','sexo','dat_nasc','email','phone','action']
  dataSource!: MatTableDataSource<Cliente>

  constructor(private ClientesService: ClientesService,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
   this.ClientesService.read().subscribe(clientes => {
     this.clientes = clientes
     this.dataSource = new MatTableDataSource<Cliente>(this.clientes)
     this.dataSource.paginator = this.paginator;
   })
   
   
  }

  create(): void {
    this.router.navigate(['clientes/create'])
  }

  toggleFavorite(cliente: Cliente): void {
    cliente.favorite = !cliente.favorite
    this.ClientesService.update(cliente).subscribe( () => {})
  }

  openDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(ClientDeleteDialogComponent, {
      width: '400px',
      data: cliente
    })

    dialogRef.afterClosed().subscribe( result => {
      if(result === true){
        this.clientes = this.clientes.filter(clientes => clientes !== cliente)
        this.dataSource = new MatTableDataSource<Cliente>(this.clientes)
        this.table.renderRows()
      }
    })
  }
}

@Component({
  selector: 'app-client-delete-dialog',
  templateUrl: './cliente-delete-dialog.html'
})
export class ClientDeleteDialogComponent {


  constructor (public dialogRef: MatDialogRef<ClientDeleteDialogComponent>, private ClientesService: ClientesService,
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente) {}

  cancelar(): void {
    this.dialogRef.close(false)
  }

  confirmar(): void {
    this.ClientesService.delete(`${this.cliente.id}`).subscribe( () => {
      this.dialogRef.close(true)
    })
  }

}