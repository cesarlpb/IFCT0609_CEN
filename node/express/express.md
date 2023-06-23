## Ejemplo de app con Express

Seguimos los pasos de [este tutorial](https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9)

Para crear el `package.json` con los valores por defecto:
```
npm init -y 
```
Si queremos editar cada uno de los valores, usamos:
```
npm init
```
---
Para instalar express y añadirlo al `package.json`:
```
npm install --save express
```
También se puede usar `-S` en lugar de `--save`

## Nodemon
Para instalar nodemon:
```
npm install -g nodemon
```
Esta instalación es global porque queremos usar nodemon para monitorizar los cambios en los ficheros de la aplicación y reiniciar el servidor automáticamente.

## Referencias
- [Temas de Express](https://www.tutorialspoint.com/expressjs/index.htm)

Para instalar un paquete globalmente:
```
npm -g install <nombre_del_paquete>
```
