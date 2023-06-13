## Albumes
  
  - id: int
  - titulo: string
  - descripcion: string
  - artistaId: int, id para identificar el artista en otra tabla
  - fecha: string
  - portada: string, path de la imagen de la portada

```javascript
{
  id: 1,
  titulo: "Título del álbum",
  descripcion: "Descripción del álbum",
  artistaId: 1,
  fecha: "2020-01-01",
  portada: "media/albumes/portada.jpg"
}
```

Crear tabla:

```sql
  CREATE TABLE IF NOT EXISTS `Albumes` 
  (`id` INT NOT NULL AUTO_INCREMENT , 
  `titulo` VARCHAR(100) NOT NULL , 
  `descripcion` VARCHAR(1000) NULL , 
  `artistaId` SMALLINT NULL , 
  `fecha` DATE NULL , 
  `portada` VARCHAR(255) NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB;
```
