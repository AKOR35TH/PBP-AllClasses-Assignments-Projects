console.log("Hello, Khanny!");
console.log("Welcome to 30 Days of JavaScript!");

//sera  imprimido hello, Khanny! e Welcome to 30 Days of JavaScript! no console

let firstName = "Khanny";
let age = 23;
let isStudent = true; // isStudent é uma variável booleana que indica se a pessoa é estudante ou não

console.log("my name is " + firstName + ", I am " + age + " years old. Am I a student? " + isStudent);
// A saída será: my name is Khanny, I am 23 years old. Am I a student? true
// Aqui, usamos a concatenação de strings para combinar texto com variáveis de diferentes tipos (string, number, boolean).
// O operador + é usado para concatenar as strings e variáveis em uma única string que é então impressa no console.
//Concatenação é só um nome pomposo para algo muito simples: juntar textos.

/*Explicação rápida, sem floreio:

console.log() → imprime no terminal.

let → cria uma variável que pode mudar.

"texto" + variável → concatena strings.

true → valor booleano (verdadeiro).
*/

let name = "Khanny";
let phrase = "Hello, my name is " + name + ".";

console.log(phrase);
// A saída será: Hello, my name is Khanny.
// Aqui, criamos uma variável 'phrase' que contém uma string concatenada com a variável 'name'.
// Em seguida, imprimimos o valor de 'phrase' no console.


// Now, let's do some variable manipulations and calculations:
let num1 = 10;
let num2 = 15;

// Operações matemáticas básicas:
let sum = num1 + num2; // Adição    
let diffence = num2 - num1; // Subtração
let product = num1 * num2; // Multiplicação
let division = num2 / num1; // Divisão
let modulus = num2 % num1; // Módulo (resto da divisão)
let exponentiation = num1 ** 2; // Exponenciação (num1 elevado ao quadrado)

console.log("Sum: " + sum); // Saída: Sum: 25
console.log("Difference: " + diffence); // Saída: Difference: 5
console.log("Product: " + product); // Saída: Product: 150
console.log("Division: " + division); // Saída: Division: 1.5
console.log("Modulus: " + modulus); // Saída: Modulus: 5
console.log("Exponentiation: " + exponentiation); // Saída: Exponentiation: 100

// Explicação:
// Aqui, realizamos várias operações matemáticas básicas usando as variáveis 'num1' e 'num2'.
// Cada operação é armazenada em uma nova variável e depois impressa no console com uma descrição.
// Isso demonstra como manipular números e realizar cálculos simples em JavaScript.

// Additional Exercises:

//1. Swap Variables
let x = 10;
let y = 20;

let temp = x; // armazenamos o valor de x em uma variável temporária. temp significa temporário. 
//x agora é 10 e temp também é 10
x=y; // agora x recebe o valor de y, que é 20.
//x agora é 20 e y ainda é 20
y=temp; // agora y recebe o valor armazenado em temp, que é o valor original de x (10).
//y agora é 10

// After swapping: x = 20, y = 10
//what happens here is that we use a temporary variable 'temp' 
// to hold the value of 'x' while we assign the value of 'y' to 'x'. 
// Then, we assign the value stored in 'temp' (which is the original value of 'x') 
// to 'y'. This effectively swaps the values of 'x' and 'y'.

//2. Simple Math with Variables
let a = 8;
let b = 3;

let sum = a + b;
let product = a * b;
let average = (a + b) / 2;

console.log("sum: " + sum); // sum: 11
console.log("product: " + product); // product: 24
console.log("average: " + average); // average: 5.5

//3. even number calculation
let evenNumber = 4;
let isEven = evenNumber % 2 === 0; // === verifica se o resto da divisão por 2 é igual a 0, este sinal é usado para comparação estrita
console.log(evenNumber + " is even: " + isEven); // 4 is even: true

//4. odd number calculation
let oddnumber = 7;
let isOdd = oddnumber % 2 !== 0; // !== verifica se o resto da divisão por 2 não é igual a 0, este sinal é usado para comparação estrita
console.log(oddnumber + " is odd: " + isOdd); // 7 is odd: true

// A difereca dos sinais === e !== é que o primeiro verifica se dois valores são iguais, enquanto o segundo verifica se dois valores são diferentes.




/* Dica Técnica:

Quando fizeres muitos cálculos, é mais elegante usar template strings para imprimir resultados.
Por exemplo, em vez de:

console.log("Sum: " + sum);


podes fazer:

console.log(`Sum: ${sum}`);


Assim evitas concatenação com " + " e o código fica mais legível.*/