/**
 * 
 * Problema: ¿Cuál sería la mejor forma de encontrar el número de teléfono de una persona o empresa en un libro de páginas amarillas?
 * 
 * Buscamos a "Pepe"
 * 
 * Persona:
 * - 1. Miraría la primera letra del apellido o nombre de empresa: P
 * - 2. Abriría esa letra en el libro -> P
 * - 3. Empiezo a pasar páginas hasta encontrarlo -> de una en una 
 *  - Si no lo encuentro paso más rápido las páginas -> de "Pa" a "Pe"
 *  - Si me paso de las letras, retrocedo y vuelvo al paso 3 -> "Pf" -> "Pe"
 * 
 * Ordenador:
 * 
 * Algoritmo #1 - leer página a página
 * 1. Leería la primera página -> "0", "a", etc. No vale
 * 2. Siguiente página -> "a ..."
 * 3. Siguiente
 * ...
 * 999. Encuentra "Pepe"
 * 
 * 100 -> 99 -> 98 ........ 1
 * 1000 -> ...
 * 
 * 
 * 
 * Este algoritmo es "malo" porque lee todas las página
 * 
 * Algoritmo #2 - abrimos una página al azar
 * 
 * 1. Abres una página al azar -> ¿Encuentras "Pepe"?
 *  2. Si lo encuentras -> has acabado
 *  3. Si no encuentras -> letra "L" -> Determinamos si "P" está antes o después de la L -> en este caso sale después
 * 3.5 Libro: A-L y L-Z --> L-Z 
 * 4. Volver al paso 1
 * 
 * 100 -> 50 -> 25 -> 12.5 -> 6.25 -> 3 -> 1.5 -> 1 
 * 1000 -> 500 -> 250 -> 125 ...
 *
 * 
 */