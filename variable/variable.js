document.write(
  "<h3>1. Declare variables using let, var, and const to store a name, age, and favorite fruit.</h3>"
);

document.write("<h3>1: VAR</h3>"); //Using  Var
var name = "Rehan";
var age = "22";
var favFruit = "Mango";
document.write(name, "<br>", age, "<br>", favFruit);

document.write("<h3>2: LET</h3>"); // Using let
let Name = "Rehan";
let Age = "22";
let FavFruit = "Mango";
document.write(Name, "<br>", Age, "<br>", FavFruit);

document.write("<h3>2: CONST</h3>"); // Using const
const Name1 = "Rehan";
const Age1 = "22";
const FavFruit1 = "Mango";
document.write(Name1, "<br>", Age1, "<br>", FavFruit1, "<br>");

document.write(
  "<h3>2. Create variables inside and outside a block ({}) using let and const.</h3>"
);

document.write("<h2>Let</h2>");
let x = 10; //Let outside block

{
  let y = 5; // Let inside block
  document.write("Inside block:", y);
}

document.write("<br>Outside block:", x);

document.write("<h2>Const</h2>");

const X = 10; //const outside block

{
  const y = 5; //const inside block
  document.write("Inside block:", y);
}

document.write("<br>Outside block:", X);

document.write(
  "<h3>3. Follow JavaScript naming conventions to create variables for a username, email address, and password.</h3>"
);
let username = "rehanashrafi";
let emailAddress = "rehan@mail.com";
let password = "1234";

document.write(username, "<br>", emailAddress, "<br>", password);

document.write(
  "<h3>4. Use let to declare a variable inside a block ({}) and try accessing it outside. Explain the result.</h3>"
);

{
  let inside = 5; // Let inside block
  document.write("Inside block:", inside);
}

inside = 10;
document.write("<br>Inside block:", inside);

document.write(
  "<h3>6. Create a global variable named count and a local variable with the same name inside a block ({}). Output both values to observe variable .</h3>"
);
let count = 10; // Global variable outside block

{
  let count = 5; // Local variable inside block
  document.write("Inside block:", count);
}

document.write("<br>Outside block:", count);

document.write(
  "<h3>7. Declare a variable with let for a number. Then assign it a string value and console.</h3>"
);

let number = 5;
number = "five";
document.write(number);

// Q: 8. Try creating variables with names that start with numbers or contain special characters. Discuss why some names are invalid.

//invalid variable names:
/*
let $special$var;  // Dollar signs are allowed, but not as the first character
let @invalidVar;   // Special characters like "@" are not allowed in variable names
let my variable;   // Spaces are not allowed in variable names
let 1stVariable;   // Variable name cannot start with a number
let my-variable;   // Hyphens are not allowed in variable names
*/
//valid variable names:
let uppercase;
let lowercase;
let camelCase;
let _internalVar;
let $specialVar;

// Q:9. Declare variables with let and const in different scopes (e.g., global scope, block scope). Discuss their visibility and scope.

//global scope

let globalX = 2;
const globalY = 2;

//Block scope

{
  let blockX = 2;
  const blockY = 2;
}

document.write("<h3>10. Declare a variable without assigning a value.</h3>");
var a;
let b;

document.write(
  "<h3>11. Create variables for a first name, last name, and age. Apply camelCase naming convention .</h3>"
);

const firstName = "Mohammad";
const lastName = "Rehan";
const fullName = firstName + " " + lastName;
const userAge = 22;

document.write("Name: ", fullName, "<br> Age: ", userAge);
