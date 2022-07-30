import {Component,OnInit} from "@angular/core";
import{Router} from "@angular/router";
import {NgForm} from '@angular/forms';

@Component({
    selector: "app-contact",
    templateUrl: 'contactcomponent.html',
    styleUrls: ["./contactcomponent.css"]
})
export class ContactComponent {

    enviar_form(frm){
        let frmv = frm.value
        let mensaje = frmv["mensaje"]
        let nombre = frmv["nombre"]
        let empresa = frmv["empresa"]

        const form = {
            nombre: nombre,
            empresa: empresa,
            mensaje: mensaje,
        }
    }
}