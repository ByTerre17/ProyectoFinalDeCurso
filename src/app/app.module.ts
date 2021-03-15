import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegisterComponent } from './componentes/usuario/register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { PerfilComponent } from './componentes/usuario/perfil/perfil.component';
import { RecuperarPasswordComponent } from './componentes/usuario/recuperar-password/recuperar-password.component';
import { VerJuegoComponent } from './componentes/juego/ver-juego/ver-juego.component';
import { CrearJuegoComponent } from './componentes/juego/crear-juego/crear-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    RecuperarPasswordComponent,
    VerJuegoComponent,
    CrearJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"},
  {provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
