`cd`: Este comando se utiliza para cambiar el directorio actual a uno específico. Por ejemplo, si quieres moverte a la carpeta "Documentos", puedes escribir cd Documentos.

Ejemplo:
Para entrar en una carpeta y volver a la superior:

```
cd nombre_de_carpeta
cd ..
```

`cd ..`: Este comando se utiliza para moverse a la carpeta superior.

`cat`: Este comando se utiliza para mostrar el contenido de un archivo. Por ejemplo, si quieres ver el contenido del archivo "nombre_del_archivo.txt", puedes escribir cat nombre_del_archivo.txt.

`ls`: Este comando muestra el contenido de la carpeta actual.

`mkdir`: Este comando se utiliza para crear una nueva carpeta. Por ejemplo, si quieres crear una carpeta llamada "Fotos", puedes escribir mkdir Fotos.

```
mkdir nombre_de_carpeta
```

`rm -r`: Este comando se utiliza para eliminar una carpeta y todo su contenido. Por ejemplo, si quieres eliminar la carpeta "Fotos", puedes escribir `rm -r Fotos`.

**Peligro:**
Primero, haced `ls` para ver que no hay nada importante en la carpeta que queréis borrar o incluso `pwd` para ver la ruta completa de la carpeta que queréis borrar.
```
rm -rf carpeta
```

`rm -r nombre_de_carpeta`
`rm`: Este comando se utiliza para eliminar un archivo. Por ejemplo, si quieres eliminar un archivo llamado "ejemplo.txt", puedes escribir rm ejemplo.txt.

```
rm nombre_de_archivo.txt
```

**Ejemplo:**
Primero debes estar en la carpeta donde se encuentra el archivo que quieres borrar.

```
ls
```
**Nota: esto borrar todo!**
Si quieres borrar todos los archivos de una carpeta:

```
rm *
```

Todos los TXT:

```
rm *.txt
```

`cp -R`: Este comando se utiliza para copiar archivos y carpetas. Por ejemplo, si quieres copiar la carpeta "Fotos" a otra ubicación, puedes escribir `cp -R Fotos /OtraUbicacion/Fotos`.

### rm

`-r`: Esta opción se utiliza para eliminar un directorio y su contenido de forma recursiva. Por ejemplo, si deseas eliminar un directorio llamado "proyecto" y todos sus contenidos, deberías utilizar el siguiente comando:

```
rm -r proyecto
```
`-f`: Esta opción se utiliza para forzar la eliminación sin preguntar al usuario si desea eliminar el archivo o directorio. Por ejemplo, si deseas eliminar un archivo llamado "archivo.txt" sin ser preguntado, deberías utilizar el siguiente comando:

```
rm -f archivo.txt
```
`-i`: Esta opción se utiliza para pedirle al usuario una confirmación antes de eliminar cada archivo o directorio. Por ejemplo, si deseas eliminar todos los archivos que coincidan con el patrón "*.txt" pero deseas confirmar cada eliminación, deberías utilizar el siguiente comando:

```
rm -i *.txt
```
`-v`: Esta opción se utiliza para imprimir un mensaje en la consola de comandos para cada archivo o directorio que se elimina. Por ejemplo, si deseas eliminar un archivo llamado "archivo.txt" y ver un mensaje de confirmación en la consola, deberías utilizar el siguiente comando:

```
rm -v archivo.txt
```