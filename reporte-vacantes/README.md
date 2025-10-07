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

🧩 Funcionamiento Interno del Backend (API PHP + MySQL)

El backend del sistema está desarrollado en PHP 8.x utilizando PDO para la conexión a la base de datos MySQL.
Toda la comunicación entre Angular y el servidor se realiza a través de endpoints REST que responden en formato JSON.

📂 Estructura de Carpetas y Propósito
/reporte_vacantes/api/
│
├── config/
│ └── database.php
│
├── models/
│ └── Usuario.php
│
└── endpoints/
├── register.php
└── login.php

🔧 config/ — Configuración de Conexión

Contiene los archivos de configuración global del sistema.

database.php
Define la clase Database, encargada de establecer la conexión con MySQL mediante PDO.
Se utiliza en todos los scripts del backend para ejecutar consultas de manera segura y reutilizable.

$database = new Database();
$conn = $database->getConnection();

🧠 PDO permite evitar inyecciones SQL, manejar errores con excepciones y trabajar con UTF-8.

👤 models/ — Lógica de Negocio

Contiene las clases que representan las entidades principales del sistema (por ejemplo, Usuario, Vacante, etc.).
Cada modelo define las funciones necesarias para interactuar con la base de datos.

Usuario.php
Incluye dos métodos principales:

register() → Crea un nuevo usuario en la base de datos y encripta la contraseña usando password_hash().

login() → Valida credenciales utilizando password_verify() y devuelve los datos del usuario si son correctos.

🔒 Esto garantiza que las contraseñas nunca se almacenen en texto plano.

🌐 endpoints/ — Puntos de Entrada (API REST)

Aquí se encuentran los archivos que funcionan como controladores públicos de la API.
Cada uno recibe los datos en formato JSON, llama a su modelo correspondiente y devuelve la respuesta al frontend.

register.php → Registra nuevos usuarios.

login.php → Valida credenciales y devuelve los datos del usuario autenticado.

📬 Todos los endpoints devuelven respuestas uniformes en JSON (por ejemplo: { "status": "success", "message": "..." }).

⚙️ .htaccess — Configuración de Rutas y Seguridad

Se implementaron archivos .htaccess para permitir que el backend (PHP) y el frontend (Angular) coexistan en el mismo dominio.

📍 En /reporte_vacantes/.htaccess

Permite el acceso a la carpeta api sin que Angular intercepte las peticiones.

RewriteEngine On

# Permitir acceso directo a la API

RewriteCond %{REQUEST_URI} ^/reporte_vacantes/api/
RewriteRule .\* - [L]

# Redirección del frontend Angular

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^reporte_vacantes/front/index.html [L]

📍 En /reporte_vacantes/api/.htaccess

Desactiva las redirecciones y habilita CORS para que Angular o Postman puedan acceder al backend.

RewriteEngine Off
Options +Indexes +FollowSymLinks
DirectoryIndex index.php

<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
  Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>

🧪 Pruebas del Backend (Postman)

Antes de conectarlo con Angular, se realizaron pruebas con Postman para confirmar el correcto funcionamiento del backend.

📮 Registro de Usuario (POST)

URL:

https://indemexico.mx/reporte_vacantes/api/endpoints/register.php

Body (JSON):

{
"nombre_usuario": "Gustavo Alonso",
"correo": "sistemas5.inde@gmail.com",
"password_hash": "dev7201",
"id_rol": 1
}

Respuesta esperada:

{
"status": "success",
"message": "Usuario registrado correctamente."
}

📘 El usuario se guarda correctamente en la base de datos con una contraseña hasheada ($2y$10$...).

🔐 Inicio de Sesión (POST)

URL:

https://indemexico.mx/reporte_vacantes/api/endpoints/login.php

Body (JSON):

{
"correo": "sistemas5.inde@gmail.com",
"password_hash": "dev7201"
}

Respuesta esperada (éxito):

{
"status": "success",
"message": "Inicio de sesión exitoso.",
"usuario": {
"id_usuario": 1,
"nombre_usuario": "Gustavo Alonso",
"correo": "sistemas5.inde@gmail.com",
"id_rol": 1
}
}

🧱 Flujo General del Backend
Angular (frontend)
↓ [POST /login o /register]
PHP (API → endpoints/)
↓ [usa models/ para acceder a datos]
MySQL (base de datos)
