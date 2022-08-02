// Follow along with the examples here
// function doNothing() {
//     let g = 0;
//     do {
//         console.log("Hello, World!");
//         g++
//     } while (g < 12);
// };
// doNothing();
// function doNothing() {}

// function sayHelloToIsabel() {
//     console.log("Hello, Isabel!");
// }

// function sayHelloToSofia() {
//     console.log("Hello, Sofia!");
// }

// function sayHelloToBrendan() {
//     console.log("Hello, Brendan!");
// }
// sayHelloToIsabel();
// sayHelloToSofia();
// sayHelloToBrendan();

// // Shorten the function and use parameters and arguments
// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
// }
// sayHelloTo("Isabel");
// sayHelloTo("Jane");
// sayHelloTo("R2-D2");
// sayHelloTo(1);

// console.log(firstName);
// // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

// function say(greeting, firstName) {
//     console.log("firstName: ", firstName);
//     console.log("greeting: ", greeting);
//     console.log(`${greeting}, ${firstName}!`)
// }
// // // say("Julio", "hello");

// // Add function with two parameters.
// function add(x, y) {
//     return x + y;
//     // x + y;
// }
// // console.log(add(1, 2));
// console.log(add(80, 9000));

// function say(greeting, firstName) {
//     // return `${greeting}, ${firstName}!`;
//     console.log(`${greeting}, ${firstName}!`);
// }
// console.log(say("Hello", "Sofia"));

// // Calculator FUnction
// const sum =add(num1, num2);
// const message = `The sum of your numbers is: ${sum}.`;
// function calculator() {
//     let num1, num2;
//     return `The sum is : ${add}`;
// }
// calculator();


// function say(greeting, firstName) {
//     console.log("I was called");
//     return `${greeting}, ${firstName}!`;
// }
// console.log(say("Howdy", "partner"));

////The first function that test return and logging.
function myFirst() {
    let sum = 9 + 8;
    console.log("This is the first test");
    // console.log(sum);
    return sum;
}
console.log(myFirst());