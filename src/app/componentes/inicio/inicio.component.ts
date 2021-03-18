import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public juegos: any[] = []
  logueado:any
  boton:any
  constructor(private fb:FormBuilder,private servicioJuegos:JuegosService,private servicioUsuarios:UsuariosService, private irHacia:Router) { }

  ngOnInit(): void {
    this.logueado= this.servicioUsuarios.isLogged
    this.obtenerJuegos()
  }



  obtenerJuegos(): void{
    this.servicioJuegos.listarJuegos().subscribe(
      respuesta =>{
        this.juegos=respuesta
        console.log(this.juegos)
      },
      error => {console.log(error)}
    )
  }

  verJuego(id:number): void{
    this.irHacia.navigate(["/verJuego/"+id])
  }
  mostrarBoton():void{
  }
}
