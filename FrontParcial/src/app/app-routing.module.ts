import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { FarmacoComponent } from './Components/farmaco/farmaco.component';

const routes: Routes = [
  {path:'', component:FarmaciaComponent},
  {path:'Farmacias', component:FarmaciaComponent},
  {path:'Farmacos', component:FarmacoComponent},
  {path:'Clientes', component:ClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
