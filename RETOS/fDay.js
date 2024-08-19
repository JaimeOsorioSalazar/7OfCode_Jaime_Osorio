// Día 1
let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'
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
function comparacion() {
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
}
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
