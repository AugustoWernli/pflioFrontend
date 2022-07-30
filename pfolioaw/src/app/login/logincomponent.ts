import {Component,OnInit} from "@angular/core";
import{Router} from "@angular/router";
import {AuthService} from './app-authservice';
import {FormsModule} from '@angular/forms';
import { UsersService } from "./auth.guard";

@Component({
    selector: "app-login",
    templateUrl: 'logincomponent.html',
    styleUrls: ["./logincomponent.css"]
})
export class LoginComponent {
    user: "";
    pass: "";
    constructor(public userService: UsersService) {}

    login(){
        const user = {user: this.user, pass: this.pass}
        this.userService.login(user).subscribe(data => {
            console.log(data)
            if (data == "SUCCESS"){
            localStorage.setItem("auth",data);
            }});
        }
    }