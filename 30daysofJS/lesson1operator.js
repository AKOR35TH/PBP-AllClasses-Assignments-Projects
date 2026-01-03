/* Exercício 1 – Operações matemáticas

Cria variáveis com dois números e imprime:

A soma

A diferença

O produto

O quociente

O resto da divisão

Mas agora, imprime tudo numa única linha com template strings.
Exemplo do formato esperado:

10 + 5 = 15, 10 - 5 = 5, 10 * 5 = 50, 10 / 5 = 2, resto = 0*/

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

console.log( `${num1} +${num2} = ${sum}, ${num1} - ${num2} = ${diffence}, ${num1} * ${num2} = ${product}, ${num1} / ${num2} = ${division}, resto = ${modulus}` );


// Additional Exercises:

//1. Swap Variables
let x = 10;
let y = 20;


let temp = x;
x=y
y = temp

// After swapping: x = 20, y = 10

//Exercício 2 – Comparações

//Declara duas variáveis:

let num1 = 10;
let num2 = 20;

console.log(num1 > num2) // false  
console.log(num1 === num2) // false   === verifica se os valores e tipos são iguais
console.log(num1 <= num2) // true     <= verifica se o valor da esquerda é menor ou igual ao da direita
console.log(num1 !== num2) // true    !== verifica se os valores e tipos são diferentes

// A difereca entre == e === é que o primeiro verifica se os valores são iguais, enquanto o segundo verifica se os valores e tipos são iguais.
// A difereca entre != e !== é que o primeiro verifica se os valores são diferentes, enquanto o segundo verifica se os valores e tipos são diferentes.
//por exemplo: 
let a = 5; // número
let b = "5"; // string

console.log(a == b);
console.log(a === b);

// O primeiro console.log retornará true, pois os valores são iguais, mesmo sendo de tipos diferentes.
// O segundo console.log retornará false, pois os tipos são diferentes (número vs string).

//vamos entender melhor com mais um exemplo mais em frente: 
let c = 10; // número
let d = "10"; // string

console.log(c != d); 
console.log(c !== d);

// O primeiro console.log retornará false, pois os valores são iguais, mesmo sendo de tipos diferentes.
// O segundo console.log retornará true, pois os tipos são diferentes (número vs string).

//3. Exercício 3 – Mini cálculo

/*Cria uma variável radius = 7, e calcula:

A área de um círculo → π * r²

O perímetro → 2 * π * r

Dica: usa Math.PI para o valor de π.*/

let radius = 7;
let area = Math.PI * Math.pow(radius, 2); // Math.pow é usado para elevar o número ao quadrado
let perimeter = 2 * Math.PI * radius;

console.log(`Area: ${area}`); // Area: 153.93804002589985
console.log(`Perimeter: ${perimeter}`); // Perimeter: 43.982297150257104
// Math.PI fornece o valor de π (pi) com precisão.
// Math.pow(radius, 2) eleva o valor de radius ao quadrado (r²).
