// --- DATOS SIMULADOS ---
const BASE_DE_DATOS = {
  usuarios: [{ id: 101, nombre: "Alicia", rol: "admin" }],
  publicaciones: [
    { userId: 101, titulo: "Promesas en JS" },
    { userId: 101, titulo: "Async/Await" },
  ],
  detalles: {
    "Promesas en JS": "Un artículo profundo sobre la asincronía.",
    "Async/Await": "Azúcar sintáctico para Promesas.",
  },
};

// 1. Obtiene el ID del usuario
function obtenerIDUsuario(nombre) {
  console.log(`Buscando usuario: ${nombre}...`);

  // Simula una operación asíncrona de 2 segundos
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = BASE_DE_DATOS.usuarios.find((u) => u.nombre === nombre);

      if (usuario) {
        // Guía: Aquí la Promesa debería llamarse 'resolve(usuario.id)'
        resolve(usuario.id);
      } else {
        // Guía: Aquí la Promesa debería llamarse 'reject("Usuario no encontrado")'
        reject("Usuario no encontrado");
      }
    }, 2000);
  });
}

// 2. Obtiene las publicaciones de un usuario por su ID
function obtenerPublicaciones(userId) {
  console.log(`Buscando publicaciones para el ID: ${userId}...`);

  // Simula una operación asíncrona de 1.5 segundos
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const publicaciones = BASE_DE_DATOS.publicaciones.filter(
        (p) => p.userId === userId
      );

      if (publicaciones.length > 0) {
        // Guía: Aquí la Promesa debería llamarse 'resolve(publicaciones)'
        resolve(publicaciones);
      } else {
        // Guía: Aquí la Promesa debería llamarse 'reject("No hay publicaciones")'
        reject("No hay publicaciones");
      }
    }, 1500);
  });
}

// 3. Obtiene el detalle de la primera publicación
function obtenerDetalles(publicaciones) {
  console.log(`Buscando detalles de: ${publicaciones.titulo}...`);

  // Simula una operación asíncrona de 1 segundo
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      const detalle = BASE_DE_DATOS.detalles[publicaciones[0].titulo];

      if (detalle) {
        // Guía: Aquí la Promesa debería llamarse 'resolve(detalle)'
        resolve(detalle);
      } else {
        // Guía: Aquí la Promesa debería llamarse 'reject("Detalle no disponible")'
        reject("Detalle no disponible");
      }
    }, 1000);
  });
}

// // --- EL CALLBACK HELL ---
// // Tarea: Reescribir este bloque usando Promesas y .then().catch()
// obtenerIDUsuario("Alicia", (error, userId) => {
//   if (error) {
//     console.error("Error en ID:", error);
//     return;
//   }

//   obtenerPublicaciones(userId, (error, publicaciones) => {
//     if (error) {
//       console.error("Error en Publicaciones:", error);
//       return;
//     }

//     // Solo tomamos la primera publicación para simplificar la cadena
//     const primeraPublicacion = publicaciones[0];

//     obtenerDetalles(primeraPublicacion, (error, detalle) => {
//       if (error) {
//         console.error("Error en Detalles:", error);
//         return;
//       }

//       // ¡Éxito!
//       console.log("\n--- RESULTADO FINAL CON CALLBACKS ---");
//       console.log(`Usuario ID: ${userId}`);
//       console.log(`Título: ${primeraPublicacion.titulo}`);
//       console.log(`Detalle: ${detalle}`);
//     });
//   });
// });

let userIdGlobal = null;

obtenerIDUsuario("Alicia")
  .then((user_id) => {
    console.log("Ahora, vamos a buscar los posts");
    userIdGlobal = user_id;
    return obtenerPublicaciones(user_id);
  })
  .then((publicaciones) => {
    console.log("Encontramos las publicaciones...");
    return obtenerDetalles(publicaciones);
  })
  .then((detalle) => {
    console.log("\n--- RESULTADO FINAL CON CALLBACKS ---");
    console.log(`Usuario ID: ${userIdGlobal}`);
    console.log(`Título: ${tituloGlobal}`);
    console.log(`Detalle: ${detalle}`);
  })
  .catch((err) => {
    console.log(err);
  });
