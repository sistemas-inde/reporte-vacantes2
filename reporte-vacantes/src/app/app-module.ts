import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Navbar } from './shared/navbar/navbar';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vacantes } from './pages/vacantes/vacantes';
import { Candidatos } from './pages/candidatos/candidatos';
import { Seguimiento } from './pages/seguimiento/seguimiento';
import { Catalogos } from './pages/catalogos/catalogos';
import { Reportes } from './pages/reportes/reportes';
import { Bitacora } from './pages/bitacora/bitacora';
import { Usuarios } from './pages/usuarios/usuarios';

@NgModule({
  declarations: [
    App,
    AuthLayout,
    MainLayout,
    Login,
    Register,
    Navbar,
    Dashboard,
    Vacantes,
    Candidatos,
    Seguimiento,
    Catalogos,
    Reportes,
    Bitacora,
    Usuarios,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
