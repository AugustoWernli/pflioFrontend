import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './login/app-authservice';
import {LoginComponent} from './login/logincomponent';
import {InicioComponent} from './inicio/iniciocomponent';
import {EducacionComponent} from './educación/educacioncomponent';
import {ProyectosComponent} from './proyectos/projectcomponent';
import {ContactComponent} from './contacto/contactcomponent'

@NgModule({
  declarations: [AppComponent, LoginComponent, InicioComponent, EducacionComponent, ProyectosComponent, ContactComponent],
  imports:      [BrowserModule,HttpClientModule , FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
