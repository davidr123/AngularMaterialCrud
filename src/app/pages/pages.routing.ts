
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './mantenimientos/perfil/perfil.component';
import { PruebamatComponent } from './mantenimientos/pruebamat/pruebamat.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';

import { PagesComponent } from './pages.component';

const routes:Routes=[

    {

        path:'dashboard',

        component:PagesComponent,
     
        canActivate:[AuthGuard],
  
        children:[
    
          {path:'', component: DashboardComponent, data:{titulo:'Dashboard'}},
      
          {path: 'usuarios', component: UsuariosComponent},
          {path: 'perfil', component: PerfilComponent},
          {path: 'md1', component: PruebamatComponent},
       
        ]
    
    
      }

]



@NgModule({
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  