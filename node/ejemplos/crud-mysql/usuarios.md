## Usuarios

   - id: int
   - nombre: string
   - apellido: string
   - email: string
   - password: string

```javascript
{
  id: 1,
  nombre: "María",
  apellido: "Jimenez",
  email: "maria.j@gmail.com",
  password: "123456"
}
```
Query para crear tabla:
```sql
CREATE TABLE `objetos`.`Usuarios` 
  (`id` SMALLINT NOT NULL AUTO_INCREMENT , 
  `nombre` VARCHAR(100) NULL , 
  `apellido` VARCHAR(100) NULL , 
  `email` VARCHAR(100) NOT NULL , 
  `password` VARCHAR(20) NULL , 
  PRIMARY KEY (`id`)) 
ENGINE = InnoDB;
```