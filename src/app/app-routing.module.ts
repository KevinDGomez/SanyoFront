import { NgModule } from '@angular/core';
import { NavigationCancel, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Components/home/home.component'
import { ComprasComponent } from './Components/compras/compras.component';
import { ContactenosComponent } from './Components/contactenos/contactenos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PedidosComponent } from './Components/pedidos/pedidos.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent},
   {path: 'home', component: HomeComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'compras', component: ComprasComponent },
   {path:'pedidos', component: PedidosComponent},
   {path: 'contactenos', component: ContactenosComponent},
   {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
