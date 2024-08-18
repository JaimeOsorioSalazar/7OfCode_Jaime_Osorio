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