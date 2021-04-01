import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/template/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import { ClientesComponent } from './components/views/clientes/clientes.component';
import { FavoritosComponent } from './components/views/favoritos/favoritos.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ClienteReadComponent } from './components/clientes/cliente-read/cliente-read.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClienteUpdateComponent } from './components/clientes/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/clientes/cliente-delete/cliente-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientesComponent,
    FavoritosComponent,
    FooterComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
