import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './app-authservice';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post("pfolioback-augustowernli05.koyeb.app/login",user,{responseType: "text"})
  }
}
