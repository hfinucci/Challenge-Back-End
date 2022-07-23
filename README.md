# Challenge-Back-End utilizando Express

## Inicializar el proyecto
Para utilizar la API REST basta con tener node.js instalado.
Primero hay que correr el comando `npm install` en la raiz del repositorio para instalar las dependencias necesarias.
Finalmente, correr el comando `npm run startDev` para inicializar el proyecto

## Probar el proyecto
Para probar que los endpoints esten funcionando correctamente se puede utilizar una herramienta como Postman, Thunder client o curl para realizar los requests HTTP.
La URL base del proyecto es `http://localhost:3000`. Para hacer un request, se tiene que agregar el path necesario despues de esta URL base. Por ejemplo, si se quiere acceder a todos los heroes ordenados por votos, se tiene que utilizar la URL `http://localhost:3000/api/v1/votes/heroes`

