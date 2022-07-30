
import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router,NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pfolioaw';

  //Funciones Login//

  logout(){
      localStorage.removeItem("auth")
  }
  public get logIn(): boolean {
      return (localStorage.getItem("auth") !== null)
  }

}