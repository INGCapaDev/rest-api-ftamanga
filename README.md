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

---

- Error
  El servidor colapso porque no encontraba
  las librerias instaladas que se necesitan
  para correr el servidor.
- Fecha
  23-Marzo-2023
- Tester
  Nombre
- Soluciono
  Alvaro Capaceta
- Solucion
  Se reinstalaron las librerias npm que
  estaban en el archivo ´package.json´

---

- Error
  El archivo .env que contiene informacion
  privada acerca del servidor se subio
  al repositorio de github.
- Fecha
  23-Marzo-2023
- Tester
  Nombre
- Soluciono
  Alvaro Capaceta
- Solucion
  Se agrego el archivo ´.env´ al
  archivo de configuracion ´.gitignore´
  para que no se subiera al repositorio
  al momento de hacer cambios en el
  proyecto.

---

- Error
  Al hacer una peticion de algun
  producto por ID al servidor no se
  retornaba ninguna respuesta al usuario.
- Fecha
  23-Marzo-2023
- Tester
  Nombre
- Soluciono
  Alvaro Capaceta
- Solucion
  Se arreglo el controlador de productos
  que le faltaba retornar la respuesta que
  obtenia de la base de datos al usuario.

---

- Error
  El controlador de borrar productos arroja error
  al intentar borrar el producto, a pesar de que este
  si exista en la base de datos.
- Fecha
  23-Marzo-2023
- Tester
  Nombre
- Soluciono
  Alvaro Capaceta
- Solucion
  Se corrigio la consulta que se realizaba por el controlador
  de productos al momento de intentar eliminar un producto
  en la base de datos.

---

- Error
  El controlador de borrar productos al regresar
  una respuesta al usuario, cuando se logro realizar
  la eliminacion con exito regresa una respuesta
  sin sentido.
- Fecha
  23-Marzo-2023
- Tester
  Nombre
- Soluciono
  Alvaro Capaceta
- Solucion
  Se cambio la respuesta que arroja al servidor
  al usuario cuando se completa el proceso correctamente.
