## Artistas
  
  - id: int
  - nombre: string
  - descripcion: string
  - fechaNacimiento: date, string en formato de fecha
  - lugarNacimiento: string
  - foto: string, path de la imagen del artista

```javascript
  {
    id: 1,
    nombre: "Michael Jackson",
    descripcion: `Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Known as the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. During his four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot.`,
    fechaNacimiento: "1958-08-29",
    lugarNacimiento: "USA",
    foto: "media/artistas/michael.jpg"
  }
```

```sql

CREATE TABLE IF NOT EXISTS `Artistas` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT , 
  `nombre` VARCHAR(100) NOT NULL , 
  `descripcion` VARCHAR(500) NULL , 
  `fechaNacimiento` DATE NULL , 
  `lugarNacimiento` VARCHAR(50) NULL , 
  `foto` VARCHAR(255) NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB;
```