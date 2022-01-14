import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { AltausuarioComponent } from '../app/pages/altausuario/altausuario.component';
import { BuscarComponent } from '../app/pages/buscar/buscar.component';

const routes : Routes=[
  { path: 'home', component: HomeComponent }, 
  { path: 'nuevousuario/:id', component: AltausuarioComponent },
  { path: 'buscarusuario', component: BuscarComponent },
  { path: '**', redirectTo : '/home'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'} )
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
