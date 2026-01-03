O que são data types?

Tudo o que o JavaScript usa — números, textos, listas, etc. — tem um tipo de dado.
É o tipo de coisa que uma variável guarda.

// Exemplos de tipos de dados em JavaScript:

let age = 25; // Number (número)
let name = "Alice"; // String (texto)
let isStudent = true; // Boolean (booleano: true ou false)
let hobbies = ["reading", "gaming", "coding"]; // Array (lista)
let person = { firstName: "John", lastName: "Doe" }; // Object (objeto)
let nothing = null; // Null (nenhum valor)
let notDefined; // Undefined (não definido)

// Cada tipo de dado tem suas próprias características e usos.
// Por exemplo, números são usados para cálculos, strings para textos, booleanos para condições, etc.

1. Number

//São todos os números — inteiros ou decimais.

let idade = 21;
let temperatura = 36.5;

2. String

//São textos — tudo entre aspas simples ' ' ou duplas " ".

let nome = "Khanny";
let frase = 'Eu adoro JavaScript!';

3. Boolean

//Só pode ser true ou false — verdadeiro ou falso.

let temDinheiro = true;
let estaChovendo = false;

4. Undefined

//Quando uma variável é declarada mas ainda não recebeu valor.

let carro;
console.log(carro); // undefined

5. Null

//Quando uma variável intencionalmente não tem valor.

let namorado = null; // significa "ninguém"


6. Object

Um objeto é uma estrutura que guarda informações mais complexas.

let pessoa = {
  nome: "Khanny",
  idade: 21,
  pais: "Moçambique"
};

console.log(pessoa.nome); // A saída será: Khanny
// Aqui, criamos um objeto 'pessoa' com propriedades como 'nome', 'idade' e 'pais'.
// Podemos acessar essas propriedades usando a notação de ponto (pessoa.nome).

// Objetos são úteis para agrupar dados relacionados e representar entidades do mundo real.

7. Array

Uma lista (ou coleção) de valores.

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]); // A saída será: banana
// Aqui, criamos um array 'frutas' que contém três elementos.
// Podemos acessar os elementos do array usando índices, começando do zero (frutas[0] é "maçã").

// Arrays são úteis para armazenar múltiplos valores em uma única variável e para manipular listas de dados.

Dica

Podes sempre descobrir o tipo de um dado com o comando:

console.log(typeof 10);        // number
console.log(typeof "Khanny");  // string
console.log(typeof true);      // boolean

//Exercícios Adicionais:
let nome = "Khanny"; //string
let idade = 23;     //number
let estudante = true;     //Boolean
let pais;                  //undefined
let cidade = null;      //null
let frutas = ["manga", "banana", "maçã"]; //array
let pessoa = { nome: "Khanny", idade: 23, estudante: true };    //object

console.log(typeof nome); 
console.log(typeof idade);
console.log(typeof estudante);
console.log(typeof pais);
console.log(typeof cidade);
console.log(typeof frutas);
console.log(typeof pessoa);
// A saída será:
// string
// number
// boolean
// undefined
// object
// object
// object

// Note que arrays e null são ambos do tipo 'object' em JavaScript.


Tanto null quanto array aparecem como object quando usas typeof.

Mas não são a mesma coisa.

//null é um valor vazio intencional (significa literalmente “nada”).

//array é um objecto especial que serve para guardar listas.





/*Create code that:

Has a price variable (price of a product).

Has a discount variable (discount percentage).

Calculates the final price after the discount.

Displays a statement like this in the console:

"The original price was X, the discount was Y%, and the final price is Z."*/

let price = 30; // number
let discount = 3; // number (percentual sem %)
let discountValue = (price * discount) / 100;
let finalPrice = price - discountValue;

console.log(`O preço original era ${price}, o desconto foi de ${discount}%, e o preço final é ${finalPrice}.`);
