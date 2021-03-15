import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { VerJuegoComponent } from './componentes/juego/ver-juego/ver-juego.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { PerfilComponent } from './componentes/usuario/perfil/perfil.component';
import { RecuperarPasswordComponent } from './componentes/usuario/recuperar-password/recuperar-password.component';
import { RegisterComponent } from './componentes/usuario/register/register.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'verJuego/:id', component: VerJuegoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
