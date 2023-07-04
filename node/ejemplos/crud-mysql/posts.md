## Posts

   - id: int
   - title: string
   - body: string
   - userId: int

```javascript
  {
    id: 1,
    title: "Título del post",
    body: "Cuerpo del post.\n Segunda línea.\nEtc.",
    userId: 1
  }
```

Creamos tabla Posts:

```sql
CREATE TABLE IF NOT EXISTS `objetos`.`Posts` 
(`id` SMALLINT NOT NULL AUTO_INCREMENT , 
`title` VARCHAR(100) NOT NULL , 
`body` VARCHAR(6000) NULL , 
`userId` SMALLINT NOT NULL , PRIMARY KEY (`id`)) 
ENGINE = InnoDB;
```

Siempre podemos recuperar este query con:
```sql
-- Para ver cómo creamos tabla:
SHOW CREATE TABLE Posts;
```
