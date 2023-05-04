import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { FarmacoComponent } from './Components/farmaco/farmaco.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './Components/table/table.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormClienteComponent } from './Components/Forms/form-cliente/form-cliente.component';
import { FormFarmaciaComponent } from './Components/Forms/form-farmacia/form-farmacia.component';
import { FormFarmacoComponent } from './Components/Forms/form-farmaco/form-farmaco.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteComponent,
    FarmacoComponent,
    FarmaciaComponent,
    TableComponent,
    LoginComponent,
    FormClienteComponent,
    FormFarmaciaComponent,
    FormFarmacoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
