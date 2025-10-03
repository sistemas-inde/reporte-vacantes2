# 📌 Sistema de Reclutamiento y Gestión de Vacantes – INDE

Aplicación web desarrollada en **Angular 20.2.1** que permite la **gestión centralizada de vacantes, candidatos y reportes**, con generación automática de informes para Dirección.

---

## 🚀 Tecnologías utilizadas

- **Frontend:** Angular 20.2.1
- **UI:** Bootstrap 5 (integrado con `main.ts`)
- **Backend (pendiente):** MySQL + PHP (cPanel)
- **Control de versiones:** Git/GitHub

---

## 📂 Estructura del proyecto

src/app/
│
├── layouts/ # Plantillas base
│ ├── auth-layout/ # Layout para login/register (sin navbar)
│ └── main-layout/ # Layout para la app principal (con navbar)
│
├── auth/ # Pantallas de autenticación
│ ├── login/
│ └── register/
│
├── shared/ # Componentes reutilizables
│ └── navbar/
│
└── pages/ # Módulos funcionales
├── dashboard/
├── vacantes/
├── candidatos/
├── seguimiento/
├── catalogos/
├── reportes/
├── bitacora/
└── usuarios/

# Clonacion del repositorio

git clone https://github.com/tuusuario/inde-reclutamiento.git
cd inde-reclutamiento

# Instalacion de dependencias

npm install

# Instalacion de Bootstrap

npm install bootstrap

# Agregas CSS global en angular.json

"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
]

# Importar JS de Bootstrap en src/main.ts

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

# Levantar el servidor de desarrollo

ng serve -o
