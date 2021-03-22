import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  logueado= this.servicioUsuarios.isLogged
  constructor(private servicioUsuarios:UsuariosService, private irHacia:Router) { }

  ngOnInit(): void {
  }
  doLogout(): void{
    this.servicioUsuarios.logOut()
    this.irHacia.navigate([''])
  }
}
