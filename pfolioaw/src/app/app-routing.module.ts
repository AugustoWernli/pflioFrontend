
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/logincomponent';
import {InicioComponent} from './inicio/iniciocomponent';
import {EducacionComponent} from './educación/educacioncomponent';
import {ProyectosComponent} from './proyectos/projectcomponent';
import {ContactComponent} from './contacto/contactcomponent'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'login', component:LoginComponent, pathMatch: 'full'},
  {path: 'educacion', component:EducacionComponent, pathMatch: 'full'},
  {path: 'inicio', component:InicioComponent, pathMatch: 'full'},
  {path: 'proyectos', component:ProyectosComponent, pathMatch: 'full'},
  {path: 'contacto', component:ContactComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }