import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//* layouts
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';

//* Auth
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

//* Pages
import { Dashboard } from './pages/dashboard/dashboard';
import { Vacantes } from './pages/vacantes/vacantes';
import { Candidatos } from './pages/candidatos/candidatos';
import { Seguimiento } from './pages/seguimiento/seguimiento';
import { Catalogos } from './pages/catalogos/catalogos';
import { Reportes } from './pages/reportes/reportes';
import { Bitacora } from './pages/bitacora/bitacora';
import { Usuarios } from './pages/usuarios/usuarios';

const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'vacantes', component: Vacantes },
      { path: 'candidatos', component: Candidatos },
      { path: 'seguimiento', component: Seguimiento },
      { path: 'catalogos', component: Catalogos },
      { path: 'reportes', component: Reportes },
      { path: 'bitacora', component: Bitacora },
      { path: 'usuarios', component: Usuarios },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
