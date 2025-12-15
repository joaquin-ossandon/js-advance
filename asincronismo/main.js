// const pedirPizza = (cb) => {
//     console.log("El cliente pidió su pizza")
//     cb()
// }

// function entrega(cb) {
//     console.log("Caminando al mostrador...")
//     cb()
// }

// pedirPizza(() => {
//     console.log("Preparando pizza")
//     entrega(() => {
//         console.log("LA pizaa se entregó")
//     })
// })

// CREAR CON PROMESAS
const orderPizza = (clientName) => {
  console.log("... el usuario está pidiendo ...");
  return new Promise((resolve, reject) => {
    if (true) {
      resolve({ id_pedido: Math.random(), nombre: clientName });
    } else {
      reject("No podemos preparar la pizza porqu el pizzero renunció");
    }
  });
};

const prepararPizza = (client) => {
  console.log("... Preparando pizza ...");
  return new Promise((resolve, reject) => {
    if (false) {
      resolve({ ...client, done: true });
    } else {
      reject("Tu pizza se quemó");
    }
  });
};

const entregarPizza = (orderStatus) => {
  return new Promise((resolve, reject) => {
    if (orderStatus.done) {
      resolve(`Oye ${orderStatus.nombre}, tu pedido ${orderStatus.id_pedido}, está listo, lleatelo`);
    } else {
      reject("Tu pizza se quemó");
    }
  });
}

orderPizza("Cliente feliz")
  .then((valorResuelto) => {
    return prepararPizza(valorResuelto);
  })
  .then((valorResuelto) => {
    return entregarPizza(valorResuelto)
  })
  .then((textoResuelto) => {
    console.log(textoResuelto)
  })
  .catch((err) => {
    console.log(err);
  });


  fetch