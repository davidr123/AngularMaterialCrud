import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './mantenimientos/perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { AppRoutingModule } from '../app-routing.module';




import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { LayoutModule } from '@angular/cdk/layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PagesComponent } from './pages.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {  MatOptionModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './mantenimientos/modal/modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PruebamatComponent } from './mantenimientos/pruebamat/pruebamat.component';
import { ModalpruebaComponent } from './mantenimientos/modalprueba/modalprueba.component';



@NgModule({
  declarations: [
PagesComponent,
  PerfilComponent,
 DashboardComponent,
 UsuariosComponent,
ModalComponent,
PruebamatComponent,
ModalpruebaComponent

 

  ],
  exports:[
 
 PerfilComponent,
 UsuariosComponent,
 DashboardComponent,
 ModalComponent
 
  ],
  imports: [
    CommonModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatSidenavModule,
     MatButtonModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,
     MatSliderModule,
     MatMenuModule,
     LayoutModule,
     MatFormFieldModule,
     MatTableModule,
     MatProgressSpinnerModule,
     MatInputModule,
     ReactiveFormsModule,
     FormsModule,
     MatPaginatorModule,
     MatOptionModule,
     MatTooltipModule,
     MatDialogModule
     
     
  
 
    
  ]
})
export class PagesModule { }