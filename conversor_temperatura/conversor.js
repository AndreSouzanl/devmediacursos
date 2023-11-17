// codigo em um unico arquivo
function converteParaCelsisus(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}

let fahrenheit = 77

console.log('A temperatura Convertida de fahrenheit para celsius é :>> ', 
             converteParaCelsisus(fahrenheit));
