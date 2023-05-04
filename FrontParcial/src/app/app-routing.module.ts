import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { FarmacoComponent } from './Components/farmaco/farmaco.component';
import { TableComponent } from './Components/table/table.component';
import { LoginComponent } from './Components/login/login.component';
import { FormClienteComponent } from './Components/Forms/form-cliente/form-cliente.component';
import { FormFarmaciaComponent } from './Components/Forms/form-farmacia/form-farmacia.component';
import { FormFarmacoComponent } from './Components/Forms/form-farmaco/form-farmaco.component';

const routes: Routes = [
  {path:'', component:FarmaciaComponent},
  {path:'Farmacias', component:FarmaciaComponent},
  {path:'Farmacos', component:FarmacoComponent},
  {path:'Clientes', component:ClienteComponent},
  {path:'Login', component:LoginComponent},
  {path:'FormClientes', component:FormClienteComponent},
  {path:'FormFarmacias', component:FormFarmaciaComponent},
  {path:'FormFarmacos', component:FormFarmacoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
