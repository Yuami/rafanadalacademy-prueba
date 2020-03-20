**Requisitos**
- [x] Descargar el proyecto.
- [x] Tener acceso a la DB.
- [x] PHP 7.4+.
- [x] MySQL 5.1
***
**Instrucciones**

Una vez tengais el proyecto clonado:
1. Instalamos dependencias de PHP `composer install`.
1. Instalamos dependencias de JS `npm install`.
1. Duplicar el archivo `.env.example` con el nombre `.env`
1. Generamos una clave para Laravel `php artisan key:generate`.
1. Poner los datos de acceso a la DB en el archivo `.env`
1. Usamos `php artisan serve` para encender el servidor.
1. Usamos `npm run watch` para compilar los recursos del Frontend.

***
**API**

Todos los endpoints estan debajo de `{DOMAIN}/api/{ENDPOINT}`. En este caso seria `DOMAIN = http://localhost:8000` por defcto 
 
**VERB**|**ENDPOINT**|**OPTIONS**|**DESCRIPTION**
:-----:|:-----:|:-----:|:-----:
GET|/users|-|Devuelve todos los usuarios.
GET|/users/{id}|-|Devuelve un usuario.
GET|/players|compare=void/handed/gender/birthdate|Te da los datos de todos los jugadores o puede utilizarse para comparar stats entre jugadores.
GET|/players/{id}|-|Devuelve los datos de un jugador en concreto.
GET|/players/{id}/utr|-|Devuelve el utr de un jugador.
GET|/players/{id}/classification|-|Devuelve los datos de la tabla classification de un jugador.
GET|/players/{id}/country|-|Devuelve la nacion de un jugador.
GET|/countries|-|Devuelve todas las naciones.
GET|/countries/{code}|-|Devuelve una nación.
