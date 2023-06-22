## PM2 - Process Manager para Node, Python

Para instalarlo (no hace falta hacerlo de nuevo en el servidor):
```
  npm install pm2 -g
```
**Nota:** Se instala **g**lobal para el sistema, por lo que está disponible en consola como `pm2`.

### Iniciar un proceso
Navegamos a la carpeta donde tenemo el proyecto, por ejemplo `server.js`:
```
  pm2 start server.js
```
Si queremos añadir nombre al proceso:
```
  pm2 start server.js --name <nombre_proceso>
```
Vamos a usar este formato para los procesos: `nombre_puerto`, en mi caso: `cesar_8080`.
### Lista de procesos activos
```
  pm2 list
```
### Restart
```
  pm2 restart <id>
```
### Delete
```
  pm2 delete <id>
```
### Log
```
  pm2 log <id>
```

[Más info de PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)