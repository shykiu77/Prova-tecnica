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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientesComponent,
    FavoritosComponent,
    FooterComponent,
    ClienteReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
