## Tracks o pistas
  
  - id: int
  - titulo: string
  - formato: string
  - duracion: float, en segundos
  - genero: string
  - path: string
  - filename: string
  - albumId: int, id para identificar el álbum en otra tabla
  - artistaId: int, id del artista de la canción
  
```javascript
{
  id: 1,
  name: "Nombre de la pista",
  albumId: 1,
  formato: "mp3",
  duracion: 3.5,
  genero: "Rock",
  artistaId: 1,
  path: "media",
  filename: "nombre-de-la-pista.mp3"
}
```

```sql
CREATE TABLE IF NOT EXISTS `Tracks` (
  `id` INT NOT NULL AUTO_INCREMENT , 
  `titulo` VARCHAR(255) NOT NULL , 
  `formato` CHAR(5) NULL , 
  `duracion` FLOAT NULL , 
  `genero` VARCHAR(100) NULL , 
  `path` VARCHAR(20) NOT NULL , 
  `filename` VARCHAR(255) NOT NULL , 
  `artistaId` SMALLINT NULL , 
  `albumId` SMALLINT NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB;

```