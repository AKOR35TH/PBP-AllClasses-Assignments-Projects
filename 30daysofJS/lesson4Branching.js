/*Branching lesson

Branching is used to select and execute blocks of code
when there are two (2) or more possible conditions. 
The condition is filled with a statement involving comparison operators 
and/or logical operators./*

//Exercício 1 – Example of Branching:

/*You have a total amount to pay. 
If the total is greater than or equal to 100, apply a 10% discount. 
If the total is less than 100, apply a 5% discount. 
Display the original total, the discount applied, and the final price using template strings.*/

let total = 110;
let discount = 0;

if (total >= 100) {
    discount = 10;
} else {
    discount = 5;
}

let finalPrice = total - (total * discount) / 100;

console.log(`O total era ${total}, o desconto foi ${discount}%, e o preço final é ${finalPrice}.`);

//in this example, we can note that: the condition is checked using if and else statements.
//when the condition is true, the code block inside if is executed; otherwise, 
// the code block inside else is executed.
//this allows us to branch our code based on different conditions.

//baiscally, branching helps us to make decisions in our code based on certain conditions.
