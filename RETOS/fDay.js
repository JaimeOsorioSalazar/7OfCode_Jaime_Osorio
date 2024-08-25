// Día 1
/* let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10' */
/* 

if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}

if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}
*/
/* function comparacion() {
 if (numeroUn == stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
 } else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
 }
 
 if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
 } else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
 }

 if (numeroDiez == stringDiez) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
 } else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
 }
} */
// comparacion()

// Día 2

/* 
let nombre = prompt("¿Cual es tu nombre?");
let edad = prompt("¿Cuantos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Saludos ${nombre}, tienes ${edad} años y ya estes aprendiendo ${lenguaje}`);

let teGusta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`)
if (teGusta == 1) {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
} else {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
} 
*/

// Día 3

/* 
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

1.Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.

2.Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.
 
3.Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
 
4.Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
*/
// Respuesta Día 3
/* 
let first = prompt("¿Cual es tu enfoque en el desarrollo de paginas web, Front-End o Back-End?");
let lowFirst = first.toLocaleLowerCase();

let numeroDeLenguajes = [];
let control = true;

if (lowFirst === "frontend"|| lowFirst === "front-end") {
  let especialFront = prompt(`Elegiste ${lowFirst}, ¿Quieres aprender React o Vue?`);

} if(lowFirst === "backend" || lowFirst === "back-end"){
  let especialBack = prompt(`Elegiste ${lowFirst}, ¿Quieres aprender C# o Java?`);
}

let decicion = prompt(`¿Deseas especializarte o volverte Fullstack?`);


while (control) {

  let nuevoTec =  prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
  if (nuevoTec === null || nuevoTec === "") {
    control = false;
  }else{
    numeroDeLenguajes.push(nuevoTec)
  }
  alert("Tecnología ingresada")
}
alert(`Las tecnologias son: ${numeroDeLenguajes}`)
 */

// Día 4 de 7

/* 
¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!

Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.
*/
/* let numero, intentos, numeroU;
intentos = 3;

function juego() {
  numero = Math.floor(Math.random() * 10);
  console.log(numero);
  // numero = 7;
  while (intentos != 0 && numero != numeroU) {
  
    numeroU = prompt("Adiniva que numero es entre 0 a 10")
    
    // let numeroU = prompt("Elige un número entre 0 a 10");
    if (numero == numeroU) {
      alert(`Felicidades el numero es ${numero}`);
      
    } else if (numero > numeroU ){
      intentos--
      alert(`El numero es mayor que ${numeroU}, tienes ${intentos}`);
    }else if (numero < numeroU) {
      alert(`el numero menor que${numeroU} `);
      intentos--
    }
  }
}

juego();
 */

// Día 5
/* 
Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".

A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como Frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista:

banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:
  Lista de compras:
    Frutas: 
      banana, tomate, manzana, uva, aguacate
    Lácteos: 
      leche vegetal, leche de vaca, leche en polvo
    Congelados: 
      Dulces: chicle y gominola
*/
/* 
let Frutas = [];
let Lacteos = [];
let Congelados = [];
let Dulces = [];

let mas = "si";

let saludo = prompt(
  `¡Hola! ¿Te gustaria hacer una lista de compras? (Si o No)`
);

saludo = saludo.toLocaleLowerCase();

while (mas != "no") {
  let elemento = prompt(`¿Que deseas agregar?`);

  if (elemento != "") {
    let tipo = prompt(`¿Es una fruta, lacteo, congelado o dulces?`);
    tipo = tipo.toLocaleLowerCase();

    switch (tipo) {
      case "fruta":
        Frutas.push(elemento);
        break;

      case "lacteo":
        Lacteos.push(elemento);
        break;

      case "congelado":
        Congelados.push(elemento);
        break;

      case "dulces":
        Dulces.push(elemento);
        break;
      
      default:
        break;
    }
  } else if (elemento == "" || elemento == "nada") {
    mas = "no";
    for (let i = 0; i < Frutas.length; i++) {
      Frutas.join(", ");
      Lacteos.join(", ");
      Congelados.join(", ");
      Dulces.join(", ");
    }
    alert(
      `Lista de compras: 
      
      Lista de Frutas: ${Frutas.join(", ")} 
      Lista de lácteos: ${Lacteos.join(", ")} 
      Lista de congelados: ${Congelados.join(", ")} 
      lista de dulces: ${Dulces.join(", ")}
      `
    );
  }
}
*/

// día 6

/* Otra operación muy común es la eliminación de elementos de la lista, y por eso es muy importante que sepas cómo hacerlo.

Pensándolo bien, existen muchas maneras de eliminar un elemento de una lista. Puedes eliminar el primer elemento, el último, o cualquier otro del medio de la lista. Cada una de estas operaciones tiene su propio método en la documentación de arrays de Javascript. Vamos a hablar más sobre estos métodos en la sección de "Consejos".

Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: “¿deseas añadir un alimento a la lista de compras?”.

A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos presentes en la lista actual, y la persona deberá escribir cuál de ellos desea eliminar.

Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.

Finalmente, el programa volverá al ciclo inicial de preguntas.

Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.

Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.

Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento en que exista al menos un elemento en la lista de compras. */
/* 
let Frutas = [];
let Lacteos = [];
let Congelados = [];
let Dulces = [];

let mas = "si";

let saludo = prompt(
  `¡Hola! ¿Te gustaria hacer una lista de compras? (Si o No)`
);

saludo = saludo.toLocaleLowerCase();

while (mas != "no") {
  let elemento = prompt(`
    ¿Que deseas agregar?
    Para quitar un elemento escribre "eliminar".
    `);

  if (elemento != "") {
    let tipo = prompt(`
      ¿Es fruta, lacteo, congelado o dulces?
      Si estas eliminando, dale ok.
      `);
    tipo = tipo.toLocaleLowerCase();

    switch (tipo) {
      case "fruta":
        Frutas.push(elemento);
        break;

      case "lacteo":
        Lacteos.push(elemento);
        break;

      case "congelado":
        Congelados.push(elemento);
        break;

      case "dulces":
        Dulces.push(elemento);
        break;

      default:
        break;
    }
  } else if (elemento == "" || elemento == "nada") {
    mas = "no";
    for (let i = 0; i < Frutas.length; i++) {
      Frutas.join(", ");
      Lacteos.join(", ");
      Congelados.join(", ");
      Dulces.join(", ");
    }
    alert(
      `Lista de compras: 
      
      Lista de Frutas: ${Frutas.join(", ")} 
      Lista de lácteos: ${Lacteos.join(", ")} 
      Lista de congelados: ${Congelados.join(", ")} 
      lista de dulces: ${Dulces.join(", ")}
      `
    );

  } if (elemento == "eliminar") {
    alert(
      `Lista de compras: 
      
      Lista de Frutas: ${Frutas.join(", ")} 
      Lista de lácteos: ${Lacteos.join(", ")} 
      Lista de congelados: ${Congelados.join(", ")} 
      lista de dulces: ${Dulces.join(", ")}
      `
    );

    let tipoAEliminar = prompt(`Eliminamos de frutas, lacteo, congelado, dulces`), elementoD = prompt(`¿De ${tipoAEliminar}, que vamos a eliminar?`);
   
    switch (tipoAEliminar) {
      case "fruta":
       console.log(Frutas.includes(elementoD));
       indicador = Frutas.indexOf(elementoD);
       console.log(indicador);
   
       if (indicador == 0 ) {
        Frutas.shift()
       } else {
        Frutas.splice(indicador, indicador);
       }
       
       console.log(Frutas);
        break;
   
      case "lacteo":
        console.log(Lacteos.includes(elementoD));
        indicador = Lacteos.indexOf(elementoD);
        console.log(indicador);
        if (indicador == 0 ) {
         Lacteos.shift()
        } else {
         Lacteos.splice(indicador, indicador);
        }
        console.log(Lacteos);
        
        break;
   
      case "congelado":
        indicador = Congelados.indexOf(elementoD);
        Congelados.splice(indicador, indicador);
        console.log(indicador);
        if (indicador == 0 ) {
         Congelados.shift()
        } else {
         Congelados.splice(indicador, indicador);
        }
        console.log(Congelados);
        break;
   
      case "dulces":
        console.log(Dulces.includes(elementoD));
        indicador = Dulces.indexOf(elementoD);
        if (indicador == 0 ) {
         Dulces.shift()
        } else {
         Dulces.splice(indicador, indicador);
        }
       console.log(Dulces);
       
        break;
   
      default:
        break;
    }
   }
   alert(
    `Lista de compras: 
    
    Lista de Frutas: ${Frutas.join(", ")} 
    Lista de lácteos: ${Lacteos.join(", ")} 
    Lista de congelados: ${Congelados.join(", ")} 
    lista de dulces: ${Dulces.join(", ")}
    `
  );
}
 */

// Día 7 

/* 
En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con un detalle muy importante: cada operación debe ser una función diferente en tu código.

Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.

Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".
*/