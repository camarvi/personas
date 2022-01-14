import { Component, OnInit } from '@angular/core';


import { NgForm  } from '@angular/forms';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';

import { PersonasService } from '../../services/personas.service';
import { Sexo, Tipovia } from 'src/app/interfaces/auxiliares-response';
import { UsuarioModel } from '../../models/usuario.model';

import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {

  
  tipoSexo : Sexo[] = [];
  vias : Tipovia[] = [];
  usuario = new UsuarioModel();

  constructor(private personaService : PersonasService,
  private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id= this.route.snapshot.paramMap.get('id');
  
    console.log(id);
    
    if (id !=='nuevo'){  //Voy a modificar un usuario
      this.personaService.buscarUsuarioId(id)
        .subscribe( (resp : UsuarioModel) =>{
          this.usuario = resp[0];
          this.usuario.IDPERSONA = parseInt(id);
          //console.log("Numero Tipo Via ");
          //console.log(this.usuario.TIPOVIA);
        });  
    }
    
    this.cargaCombox();
 
  }


  cargaCombox(){

    combineLatest([
      this.personaService.getSexo(),
      this.personaService.getTipoVia()
    ]).subscribe( ([sexo,tipovia]) =>{
      this.tipoSexo = sexo;  
      this.vias = tipovia
    });
   
  
  }


  guardar( forma : NgForm){

    if (forma.invalid) {
      // recorrer los elementos del formulario para que se dispare las validaciones
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched(); //Lo pongo como pulsado
      });
      return;
    }

    Swal.fire({
      allowOutsideClick : false,
      title : 'Espere',
      text: 'Guardando información..',
      icon : 'info'
    });
    Swal.showLoading();
 
    let peticion : Observable<any>;
  
    if (this.usuario.IDPERSONA !==0 ){
      peticion = this.personaService.updateUsuario(this.usuario);
    } else { //NUEVO REGISTRO  
      peticion = this.personaService.crearUsuario(this.usuario);   
    }

      peticion.subscribe( resp => {       
        Swal.fire({
          title : this.usuario.NOMBRE,
          text : 'Se actualizo correctamente..',
          icon : 'success'
        });

        });
  
  }

}
