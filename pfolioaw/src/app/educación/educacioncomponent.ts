import {Component,OnInit} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: "app-educacion",
    templateUrl: 'educacioncomponent.html',
    styleUrls: ["./educacioncomponent.css"]
})
export class EducacionComponent implements OnInit {
    experiencia:any;
    educacion: any;
    certificados:any;
    constructor(private http: HttpClient){
    }

    ngOnInit (){
      /* Educacion */
      this.http.get("https://serene-plains-00652.herokuapp.com/Educacion/traer").subscribe(
        (resp:any) => {
        let educ = resp;
        let eLen = educ.length;
        let educs = new Array<any>();
        let certs = new Array<any>();
        for(let i = 0; i < eLen; i++){
            let fn = new Array<any>();

            fn.push(educ[i]["id"].toString())

            fn.push(educ[i]["titulo"]);

            fn.push(educ[i]["lugar"]);

            let fi = (educ[i]["fecha_inicio"])
            fn.push(fi);

            let ff = (educ[i]["fecha_fin"])
            fn.push(ff);

            fn.push(educ[i]["logo"]);
            
            fn.push(educ[i]["tipo"])
            
            fn.push(false)

            if(educ[i]["tipo"] === "titulo"){
              educs.push(fn)
            } else {
              certs.push(fn)
            }
            
        }
        this.educacion = educs;
        this.certificados = certs;
      });
      (error:any) =>{
        console.log(error)
      };

      /* Experiencia */
      this.http.get("https://serene-plains-00652.herokuapp.com/Experiencia/traer").subscribe(
        (resp:any) => {
        let exp = resp;
        let eLen = exp.length;
        let exps = new Array<any>();
        for(let i = 0; i < eLen; i++){
            let fn = new Array<any>();

            fn.push(exp[i]["id"])

            fn.push(exp[i]["titulo"]);

            fn.push(exp[i]["empresa"]);

            let fi = (exp[i]["fecha_inicio"])
            fn.push(fi);

            
            if (i === 2){
              let ff = "Actualidad"
              fn.push(ff);
            }
            else if (exp[i]["fecha_fin"] !== "null"){
              console.log("xd")
              let ff = (exp[i]["fecha_fin"])
              fn.push(ff);
            }
            fn.push(exp[i]["logo"]);
              
            fn.push(exp[i]["descripcion"]);

            fn.push(exp[i]["programas"]);

            fn.push(false)

            exps.push(fn)
        }
        this.experiencia = exps;
      });
      (error:any) =>{
        console.log(error)
      };
    };

    public get logIn(): boolean {
      return (localStorage.getItem("auth") !== null)
    }

    modif_exp(exps){
      let expsv = exps.value
      let id = expsv["id"];
      let titulo =expsv["titulo"];
      let empresa = expsv["empresa"];
      let fi =expsv["fechainicio"];
      let ff =expsv["fechafin"];
      let logo =expsv["logo"];
      let dsc = expsv["descripcion"];
      let prg = expsv["programas"];

      const exp = {
        empresa: empresa,
        titulo: titulo,
        logo: logo,
        fecha_inicio: fi,
        fecha_fin: ff,
        descripcion: dsc,
        programas: prg
      };

      this.http.post("https://serene-plains-00652.herokuapp.com/Experiencia/editar/"+String(id),exp,{responseType: "text"}).subscribe(data => {
        alert(data)
      })
    }

    modif_edc(edcs){
      let edcsv = edcs.value
      let id = edcsv["id"];
      let titulo =edcsv["titulo"];
      let lugar =edcsv["lugar"];
      let fi =edcsv["fechainicio"];
      let ff =edcsv["fechafin"];
      let logo =edcsv["logo"];
      let tipo = edcsv["tipo"];

      const edc = {
        titulo: titulo,
        tipo: tipo,
        lugar: lugar,
        logo: logo,
        fecha_inicio: fi,
        fecha_fin: ff
      };
      
      this.http.post("https://serene-plains-00652.herokuapp.com/Educacion/editar/"+String(id),edc,{responseType: "text"}).subscribe(data => {
        alert(data)
      })
    }
    
    borrar_exp(exps){
      let id = exps[0];
      let text = "¿Estas seguro que quieres borrar esta entrada?";
        if (confirm(text) == true) {
          this.http.delete("https://serene-plains-00652.herokuapp.com/Experiencia/borrar/"+String(id),{responseType: "text"}).subscribe(data => {
          alert(data)
          })
      }
    }

    borrar_edc(edcs){
      let id = edcs[0];
      let text = "¿Estas seguro que quieres borrar esta entrada?";
        if (confirm(text) == true) {
          this.http.delete("https://serene-plains-00652.herokuapp.com/Educacion/borrar/"+String(id),{responseType: "text"}).subscribe(data => {
          alert(data)
          })
      }
    }

    ocult_edc(edc){
      edc[7]= !edc[7]
    }
    ocult_exp(exp){
      exp[8]= !exp[8]
    }
  }