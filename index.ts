// Tipad
// Para determinar el tipo de los parámetros de la función, debes dar por hecho que los tipos van a ser siempre los de las dos variables que se añaden en la llamada de la linea 20.

// se añade tipado a las variables.
let a: number;
let b: string;
let c: boolean | number;

a = 5;
b = "texto";
c = true;

if (Math.random() >= 0.5) {
  c = 100;
}

// se añade tipado a los parámetros y a la función
function d(param1: number, param2: number | boolean): number | string {
  if (typeof param2 === "number") {
    return param1 + param2;
  } else {
    return "el segundo parámetro no es un número";
  }
}

console.log(d(a, c));
