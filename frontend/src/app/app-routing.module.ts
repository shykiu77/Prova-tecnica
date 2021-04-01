import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { FavoritosComponent } from './components/views/favoritos/favoritos.component';
import { ClientesComponent } from './components/views/clientes/clientes.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "favoritos",
    component: FavoritosComponent
  },
  {
    path: "clientes/create",
    component: ClienteCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
