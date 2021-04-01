import { Cliente } from './clientes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl =  "http://localhost:3001/clientes"

  constructor(private http: HttpClient) { }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl,cliente)
  }

  read() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url,cliente)
  }

  delete(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }

}
