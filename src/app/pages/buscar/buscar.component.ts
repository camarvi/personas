import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PersonasService } from '../../services/personas.service';
import { PersonaInterface } from '../../interfaces/auxiliares-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public personas: PersonaInterface[] = [];

  public cargando : boolean = false;

  constructor(private personaService : PersonasService) { }

  ngOnInit(): void {
  }


  buscarPersona(dni : string, ap1 : string, ap2:string) {

    console.log(ap1);

    dni = dni.trim().toUpperCase();
    ap1 = ap1.trim().toUpperCase();
    ap2 = ap2.trim().toUpperCase();

    let peticion : Observable<PersonaInterface[]>;
   
   if ((dni.length>4) || (ap1.length>2)) {
    this.cargando = true;
    if (dni.length>4) {
    peticion = this.personaService.buscarUsuarioNifGrid(dni);
      
    } else {
      if (ap2.length>2) {
      peticion = this.personaService.buscarUsuarioAp1Ap2(ap1,ap2);
          
      } else {
      peticion = this.personaService.buscarUsuarioAp1(ap1);
       
      }
     
    }

    peticion.subscribe( resp => {
      console.log(resp);
      this.personas = resp;
      this.cargando = false;
    })


   }
    
  

  }


}
