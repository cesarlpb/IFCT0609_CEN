## Tracks o pistas
  
  - id: int
  - name: string
  - albumId: int, id para identificar el álbum en otra tabla
  - formato: string
  - duracion: float
  - genero: string
  - artistaId: int, id del artista de la canción
  - path: string
  - filename: string
  
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