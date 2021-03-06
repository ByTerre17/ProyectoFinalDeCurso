import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-ver-juego',
  templateUrl: './ver-juego.component.html',
  styleUrls: ['./ver-juego.component.css']
})
export class VerJuegoComponent implements OnInit {
  idJuego: any
  juegos: any[] = []
  juego: any
  logueado: any
  comentarios:any
  urlActiva: any
  usuario: any
  formComentario = this.fb.group({
    idJuego: [''],
    idUsuario: [''],
    texto: ['', Validators.required],
    titulo: ['', Validators.required],
    nota: ['', Validators.required]
  })
  constructor(private ruta: ActivatedRoute,private fb:FormBuilder,private servicioJuegos:JuegosService,private servicioUsuarios:UsuariosService, private irHacia:Router,private servicioComentarios:ComentariosService,@Inject(DOCUMENT) document: any) { }

  ngOnInit(): void {
    this.logueado= this.servicioUsuarios.isLogged
    this.idJuego = this.ruta.snapshot.paramMap.get("id")
    this.obtenerJuego()
    this.obtenerJuegos()
    this.urlActiva = document.location.href
    this.obtenerComentariosPorJuego(this.idJuego)
    this.cargarPerfil()
  }
  obtenerJuego(): void{
    this.servicioJuegos.verJuego(this.idJuego).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.juego=respuesta
        console.log(this.juego)
      },
      error => {console.log(error)}
    )
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

  escribirComentario(): void{
    console.log(this.formComentario.value)
    this.servicioComentarios.crearComentario(this.formComentario.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        
        window.location.reload();
      },
      error => console.log(error)
    )
  }

  obtenerComentarios(): void{
    this.servicioComentarios.listarComentarios().subscribe(
      respuesta =>{
        this.comentarios=respuesta
        console.log(this.comentarios)
      },
      error => {console.log(error)}
    )
  }

  obtenerComentariosPorJuego(idJuego: any): void{
    this.servicioComentarios.listarComentariosPorJuego(idJuego).subscribe(
      respuesta =>{
        this.comentarios=respuesta
        console.log(this.comentarios)
      },
      error => {console.log(error)}
    )
  }

  cargarPerfil(): void{
    this.servicioUsuarios.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuario = respuesta
      },
      error => console.log(error)
    )
  }

  eliminarComentario(idComentario:any): void{
    this.servicioComentarios.eliminarComentario(idComentario,this.usuario.id).subscribe(
      respuesta => {
        console.log(respuesta)
        window.location.reload();
      },
      error => console.log(error)
    )
  }
  comprobarUsuario(idRespuestaUsuario:any): boolean{
    let igual = false
    if(this.usuario.id == idRespuestaUsuario){
      igual = true
    }
    return igual
  }

}
