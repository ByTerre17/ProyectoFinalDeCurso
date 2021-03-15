import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
perfil: Usuario ={}

  constructor(private servicioUsuario:UsuariosService, private fb:FormBuilder, private irHacia:Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
  }
cargarPerfil(): void{
  this.servicioUsuario.obtenerPerfil().subscribe(
    respuesta => {
      console.log(respuesta)
      this.perfil = respuesta
    },
    error => console.log(error)
  )
}
}
