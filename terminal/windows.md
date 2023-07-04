## Windows Terminal

`cd`: Este comando se utiliza para cambiar el directorio actual a uno específico. Por ejemplo, si quieres moverte a la carpeta "Documentos", puedes escribir cd Documentos.

**Ejemplo:**
Para entrar en una carpeta y volver a la superior:
```
cd nombre_de_carpeta
cd ..
```

`cd ..`: Este comando se utiliza para moverse a la carpeta superior.

`type`: Este comando se utiliza para mostrar el contenido de un archivo. Por ejemplo, si quieres ver el contenido del archivo "nombre_del_archivo.txt", puedes escribir `type nombre_del_archivo.txt`.

`dir`: Este comando muestra el contenido de la carpeta actual.

`mkdir`: Este comando se utiliza para crear una nueva carpeta. Por ejemplo, si quieres crear una carpeta llamada "Fotos", puedes escribir mkdir Fotos.

```
mkdir nombre_de_carpeta
```

`rmdir`: Este comando se utiliza para eliminar una carpeta vacía. Por ejemplo, si quieres eliminar la carpeta "Fotos", puedes escribir rmdir Fotos.

```
rmdir nombre_de_carpeta
```

`del`: Este comando se utiliza para eliminar un archivo. Por ejemplo, si quieres eliminar un archivo llamado "ejemplo.txt", puedes escribir del ejemplo.txt.

```
del nombre_de_archivo.txt
```

**Ejemplo:**
Primero debes estar en la carpeta donde se encuentra el archivo que quieres borrar.
```
dir
```
**Nota:** esto borrar todo!

Primero comprueba que estás en la carpeta correcta:
```
cd /d %cd%
```
o:
```
echo %cd%
```

Si quieres borrar todos los archivos de una carpeta:
```
del *
```
Todos los TXT:
```
del *.txt
```

`xcopy`: Este comando se utiliza para copiar archivos y carpetas. Por ejemplo, si quieres copiar la carpeta "Fotos" a otra ubicación, puedes escribir `xcopy Fotos C:\OtraUbicacion\Fotos /s`.

### del
`/s`: Esta opción se utiliza para eliminar archivos en la carpeta actual y todas sus subcarpetas de forma recursiva. Por ejemplo, si deseas eliminar todos los archivos de la carpeta "proyecto" y todas sus subcarpetas, deberías utilizar el siguiente comando:

```
del /s proyecto
```

`/f`: Esta opción se utiliza para forzar la eliminación sin preguntar al usuario si desea eliminar el archivo o directorio. Por ejemplo, si deseas eliminar un archivo llamado "archivo.txt" sin ser preguntado, deberías utilizar el siguiente comando:

```
del /f archivo.txt
```

`/p`: Esta opción se utiliza para pedirle al usuario una confirmación antes de eliminar cada archivo o directorio. Por ejemplo, si deseas eliminar todos los archivos que coincidan con el patrón "*.txt" pero deseas confirmar cada eliminación, deberías utilizar el siguiente comando:

```
del /p *.txt
```

`/q`: Esta opción se utiliza para que la eliminación se realice en modo silencioso, es decir, sin imprimir mensajes en la consola de comandos. Por ejemplo, si deseas eliminar un archivo llamado "archivo.txt" sin ver ningún mensaje de confirmación en la consola, deberías utilizar el siguiente comando:

```
del /q archivo.txt
```