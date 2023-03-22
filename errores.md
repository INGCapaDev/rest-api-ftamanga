# Lista de errores

> Estos errores surgieron durante el desarrollo de la API

- Error
  No se estan registrando las horas en las que se
  modifica un producto o se actualiza.
- Fecha
  22-Marzo-2023
- Tester
  Nombre
- Soluciono
  Alvaro Capaceta
- Solucion
  Se agrego la propiedad 'timestamps: true' al modelo
  de la tabla de productos.

---

- Error
  Los campos createdAt, updateAt que requiere la
  propiedad de 'timestamps: true' para funcionar
  no se encuentran en la tabla de productos.
- Fecha
  22-Marzo-2023
- Tester
  Nombre
- Soluciono
  Alvaro Capaceta
- Solucion
  Se modifico la tabla de productos de la base de datos
  para agregar los campos createdAt, updateAT.
