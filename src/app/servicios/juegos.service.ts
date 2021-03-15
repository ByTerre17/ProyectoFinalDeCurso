import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const url = 'http://localhost/backendphp/juego/'
@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http:HttpClient) { }

  verJuego(id: any): Observable<any>{
    return this.http.get(url+"ver/"+id)
  }

  crearJuego(juego: any): Observable<any>{
    return this.http.post(url, juego)
  }
  
  eliminarJuego(id: any): Observable<any>{
    return this.http.delete(url+id)
  }

  listarJuegos(): Observable<any>{
    return this.http.get(url+'list/')
  }
}
