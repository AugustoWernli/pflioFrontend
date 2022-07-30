import {Component,OnInit} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: "app-proyectos",
    templateUrl: 'projectcomponent.html',
    styleUrls: ["./projectcomponent.css"]
})
export class ProyectosComponent implements OnInit {
    proyectos:any;
    skills: any;
    skls:any;
    constructor(private http: HttpClient){
    }

    ngOnInit (){
      /* Proyectos */
      this.http.get("http://localhost:8080/Proyectos/traer").subscribe(
        (resp:any) => {
        let proy = resp;
        let eLen = proy.length;
        let proyec = new Array<any>();
        for(let i = 0; i < eLen; i++){
            let fn = new Array<any>();

            fn.push(proy[i]["id"].toString())

            fn.push(proy[i]["titulo_rep"]);

            fn.push(proy[i]["lugar"]);

            let fi = (proy[i]["fecha"])
            fn.push(fi);

            let nombre = (proy[i]["nombre"])
            fn.push(nombre);

            fn.push(proy[i]["foto"]);
            
            fn.push(proy[i]["descripcion"])
            
            fn.push(false)
            
            proyec.push(fn)
        }
        this.proyectos = proyec;
      });
      (error:any) =>{
        console.log(error)
      };
    
     /* Skills */
     this.http.get("http://localhost:8080/Skills/traer").subscribe(
        (resp:any) => {
        let skl = resp;
        let eLen = skl.length;
        let skill = new Array<any>();

        for(let i = 0; i < eLen; i++){
            let fn = new Array<any>();

            fn.push(skl[i]["id"].toString())
            
            let tr= skl[i]["titulo_rep"]
            fn.push(tr);

            fn.push(skl[i]["skill"]);

            fn.push(skl[i]["dominio"]);
            
            fn.push(false)

            skill.push(fn)
        }   
        
        this.skills = skill.sort(function(a,b){
            if(a[1]>b[1]){
                return 1; 
            }
            if(a[1]<b[1]){
                return -1
            }
            return 0;
        });

      });
      (error:any) =>{
        console.log(error)
      };
      
    }
    
    public get logIn(): boolean {
        return (localStorage.getItem("auth") !== null)
      }


    create_skl(skl){
        let sklv = skl.value
        let titulo = sklv["titulo_rep"];
        let skill = sklv["skill"];
        let dom = sklv["dominio"];

        const skil = {
            titulo_rep: titulo,
            skill: skill,
            dominio: dom
            };
        this.http.post("http://localhost:8080/Skills/crear",skil,{responseType: "text"}).subscribe(data => {
            alert(data)
            })
    }
    create_proy(proys){
        let proysv = proys.value
        let titulo = proysv["titulo"];
        let nombre = proysv["nombre"];
        let fech =proysv["fecha"];
        let dsc = proysv["descripcion"];
        let ft = proysv["foto"];
        let lg =proysv["lugar"];

        const proy = {
        titulo_rep: titulo,
        nombre: nombre,
        fecha: fech,
        descripcion: dsc,
        foto: ft,
        lugar:lg
        };

        console.log(proy)
        this.http.post("http://localhost:8080/Proyectos/crear",proy,{responseType: "text"}).subscribe(data => {
            alert(data)
            })
    }
    modif_proy(proys){
        let proysv = proys.value
        let id = proysv["id"];
        let titulo =proysv["titulo"];
        let nombre = proysv["nombre"];
        let fech =proysv["fecha"];
        let dsc = proysv["descripcion"];
        let ft = proysv["foto"];
        let lg =proysv["lugar"];

        const proy = {
        titulo_rep: titulo,
        nombre: nombre,
        fecha: fech,
        descripcion: dsc,
        foto: ft,
        lugar:lg
        };

    this.http.post("http://localhost:8080/Proyectos/editar/"+String(id),proy,{responseType: "text"}).subscribe(data => {
        alert(data)
        })
    }

    modif_skl(skl){
        let sklv = skl.value
        let id = sklv["id"];
        let titulo =sklv["titulo_rep"];
        let skill = sklv["skill"];
        let dom = sklv["dominio"];

        const skil = {
        titulo_rep: titulo,
        skill: skill,
        dominio: dom,
        };

    this.http.post("http://localhost:8080/Skills/editar/"+String(id),skil,{responseType: "text"}).subscribe(data => {
        alert(data)
        })
    }
    
    borrar_proy(proys){
    let id = proys[0];
    let text = "¿Estas seguro que quieres borrar esta entrada?";
        if (confirm(text) == true) {
        this.http.delete("http://localhost:8080/Proyectos/borrar/"+String(id),{responseType: "text"}).subscribe(data => {
        alert(data)
        })
    }
    }
      
    ocult_proy(proy){
        proy[7]= !proy[7]
    }
    
    borrar_skl(skills){
    let id = skills[0];
    let text = "¿Estas seguro que quieres borrar esta entrada?";
        if (confirm(text) == true) {
        this.http.delete("http://localhost:8080/Skills/borrar/"+String(id),{responseType: "text"}).subscribe(data => {
        alert(data)
        })
        }
    }
        
    ocult_skl(skill){
        skill[4]= !skill[4]
    }
        
}