import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';



@NgModule({
  declarations: [
    HomeComponent,
    BuscarComponent,
    AltausuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
