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

# Backend de la aplicacion

Desarrollado en PHP y utiliza MySQL como gestor de base de datos alojado en el servidor de cPanel
"indemexico.mx"

# Tecnologias empleadas

# Lenguaje:

PHP 8.x

# Servidor Web:

indemexico.mx

# Base de datos:

MySQL (phpMyAdmin)

# Estructura API

RESTful

# Formato de intercambio

JSON

# Estructura del proyecto

El proyecto se aloja dentro del directorio publico del servidor

/public_html/reporte_vacantes/
│
├── api/ # Backend (PHP + conexión a MySQL)
│ ├── config/ # Archivos de configuración
│ │ └── database.php
│ ├── models/ # Clases de acceso a datos (entidades)
│ │ └── Vacante.php
│ ├── endpoints/ # Endpoints API REST (controladores)
│ │ └── vacantes.php
│ ├── index.php # Enrutador principal de la API
│ └── .htaccess # Reescritura de URLs (opcional)
│
├── front/ # Frontend Angular 20 compilado
│ ├── index.html
│ ├── assets/
│ ├── main.js
│ └── styles.css
│
└── .htaccess # Reglas de enrutamiento Angular (rutas amigables)

## Despliegue de la Aplicación en Servidor (cPanel)

**Ruta actual en servidor:**
/public_html/reporte_vacantes/front
/public_html/reporte_vacantes/api

# Compilacion del proyecto en angular

Antes de subir la aplicacion, genera la version de produccion con el siguiente comando:

ng build --configuration production

Esto creara una carpeta en la siguiente ruta:

dist/reporte-vacantes/browser/

## Subir los archivos al servidor

Subir UNICAMENTE el contenido de la carpeta "browser/" al directorio del servidor:

/reporte/vacantes/front

Archivos esperados:
-index.html
-favicon.ico
main-xxxx.js
polyfills-xxxx.js
styles-xxxx.js

# NOTA: NO subir archivos "3rdpartylicenses" ni "prerendered-routes.json".

## Configurar el archivo index.html

Verificar (o editar) el archivo index.html para incuir unicamente la siguiente linea de codigo dentro de la etiqueta <head>:

<base href="/reporte_vacantes/front/">

En caso de que exista otra linea <base href="/"> debe ser eliminada.

## Creacion del archivo .htaccess

Dentro de la carpeta /front/, crear un archivo llamado .htaccess con el siguiente contenido:

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /reporte_vacantes/front/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /reporte_vacantes/front/index.html [L]
</IfModule>

# Funcion del archivo .htaccess

Permite configurar reglas especificas para el servidor apache dentro de una carpeta.
En el caso de esta aplicacion se usa para que todas las rutas de Angular redirijan siempre al index.html
evitando errores 404 cando el usuario entra directamente a la ruta interna

## Notas adicionales para mantenimiento

El backend PHP se encuentra en: /reporte_vacantes/api/
con subcarpetas: config/, endpoints/, models/

En Angular, la URL base del backend debe configurarse en el archivo de entorno (environment.prod.ts):

export const environment = {
production: true,
apiUrl: 'https://indemexico.mx/reporte_vacantes/api/
'
};

Para futuras actualizaciones:

Ejecutar nuevamente "ng build --configuration production".

Subir los nuevos archivos compilados dentro de /front/.

No es necesario modificar el .htaccess ni el base href a menos que cambie la ruta.
