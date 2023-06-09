## Cómo utilizar la conexión a la base de datos

**Requisitos:** Tener instalado XAMPP y Node (verificar que el comando `node` o `node -v` funcione en la terminal)

---

1. En XAMPP, activar el servidor Apache y MySQL.
2. Abrir terminal, navegard a la carpeta donde se va a ejecutar este archivo.
3. Ejecutar el comando `npm install` para instalar las dependencias. -> Debe aparecer una carpeta llamada `node_modules` en la misma ubicación.
4. Para ejecutar el archivo principal:
```js
node conexion.js
```
Debemos ver algo así en consola:
```js
Se ha establecido conexión a la base de datos.
Resultado: [
  {
    "idx": 1,
    "usuario": "BRE2271",
    "nombre": "BRENDA",
    "sexo": "M",
    "nivel": 2,
    "email": "brenda@live.com",
    "telefono": "655-330-5736",
    "marca": "SAMSUNG",
    "compañia": "IUSACELL",
    "saldo": 100,
    "activo": 1
  }
]
Nombre: BRENDA
```