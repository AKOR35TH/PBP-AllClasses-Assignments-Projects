/*O que é uma condição?

É uma verificação lógica: o programa pergunta “isto é verdade?”
Se for, executa uma parte do código. Se não for, executa outra.*/

//Sintaxe básica de uma condição em JavaScript:

let age = 18;

if (age >=18) {
    console.log("You can start livin.");
} else {
    console.log("You are too young for the game.");
}   
//Neste exemplo, se a variável age for maior ou igual a 18, o programa imprime "You can start livin.".


//Exercícios adicionais:

/*Imagina que tens uma loja online, e queres aplicar um desconto automático para clientes conforme o valor da compra.
A regra é esta:

Se o total for maior ou igual a 100, aplica 10% de desconto.

Se for entre 50 e 99, aplica 5% de desconto.

Caso contrário, sem desconto.*/

let total = 110;

if (total >=100) {
    let price = total - (total * 10) /100;
} else { 
    (total < 100)
    let price = total - (total * 5) /100;
}

console.log(O total era ${total}, o desconto foi $(price), e o preço final é ${price}.)

// Resolucao limpa e corigida: 
let total = 110;
let discount = 0;

if (total >= 100) discount = 10;
else if (total <= 100) discount = 5;

let finalPrice = total - (total * discount) / 100;

console.log(`O total era ${total}, o desconto foi ${discount}%, e o preço final é ${finalPrice}.`);


console.log(`O total era ${total}, o desconto foi ${discount}%, e o preço final é ${finalPrice}.`);

//Observa:

else if // = outra condição (para o caso dos 50–99).

else // = caso nenhum dos dois anteriores seja verdadeiro.

discount // serve tanto para calcular quanto para exibir.

//2. exercicio:

/*Exercício:

Tens produtos com preço e stock.

Se o cliente comprar mais de 3 unidades de qualquer produto, aplica-se 10% de desconto.

Se o stock for menor que a quantidade pedida, mostra mensagem de “stock insuficiente”.

Mostra o preço final no terminal usando template strings.

Exemplo de dados iniciais:*/

let produto = "Camiseta";
let preco = 20;
let stock = 5;
let purchase = 4;
let precoFinal;

// Primeiro, verificamos se há stock suficiente
if (purchase > stock) {
    console.log("Stock insuficiente");
} else {
    // Se houver, aplicamos desconto se comprar mais de 3 unidades
    if (purchase > 3) {
        precoFinal = preco * 0.9; // 10% de desconto
    } else {
        precoFinal = preco;
    }

    // Mostrar resumo da compra
    console.log(`O seu produto é: ${produto}`);
    console.log(`Preço inicial: ${preco}`);
    console.log(`Preço final: ${precoFinal}`);
}


//3. exercicio:
/* Cria um código que pergunte a idade de uma pessoa (podes só definir a variável no código) e diga:

“Criança” se tiver menos de 12 anos

“Adolescente” se tiver entre 12 e 17

“Adulto” se tiver 18 ou mais */


let age = 15;
if (age < 12) {
    console.log("Criança");
} else if (age >= 12 && age <= 17) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}


//Exercicios adicionais:

/*4. Cria um código que defina uma variável com o nome de um dia da semana (por exemplo, “Segunda-feira”) e imprima se é dia útil ou fim de semana. Usa uma condição para isso.*/

let day = "Sábado";

if day === "saturday" && day === "sunday" {
    
}