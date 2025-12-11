📝 Consigna de Tarea en Grupos: Modelado POO en JavaScript

Tema: Implementación de los 4 Pilares de la POO (Programación Orientada a Objetos) en un sistema de contador de interacciones.
🚀 El Desafío: Sistema de Contadores Web

Deben trabajar en equipo para desarrollar la estructura de clases necesaria para gestionar diferentes tipos de contadores en una plataforma web (como los que se usan para Likes, Vistas o Comentarios), asegurando que se apliquen los 4 pilares de la POO en JavaScript.
🎯 Requisitos de Implementación
1. Clase Base: Contador

Creen la clase base Contador. Esta clase debe cumplir con:

    Encapsulamiento: Debe tener una propiedad privada (#) para almacenar el valor actual del contador.

    Abstracción: Debe proveer métodos públicos sencillos (incrementar() y reset()) para modificar su valor, sin exponer la lógica interna.

2. Clase Derivada 1: ContadorDeLikes

Creen una clase ContadorDeLikes que herede de Contador.

    Herencia: Debe heredar las propiedades y métodos básicos de Contador.

    Lógica Específica: Debe añadir una lógica para asegurar que un mismo usuario (userId) solo pueda dar "Like" una vez.

    Polimorfismo (Opcional pero Recomendado): Si el usuario ya dio like, el método incrementar() debe comportarse de forma diferente (no incrementar el valor base o notificar al usuario).

3. Clase Derivada 2: ContadorDeVistas

Creen una clase ContadorDeVistas que también herede de Contador.

    Polimorfismo: Debe sobrescribir el método incrementar() del padre. Después de incrementar el valor base, debe imprimir un mensaje que formatee el número de vistas con separadores de miles (ej: 10,000).