// ############################################################################################ 

// The ending double quotes in alert function was not present
// <!DOCTYPE html>
// <html>

// <body>
//     <script>
//         alert("I’m JavaScript!");
//     </script>
//     Whats the error in this ?
// </body>

// </html>
// ############################################################################################


//The javascript filename is different. Its "scripts.js". Updated 

scripts.js
alert("I’m invoked!");

// ############################################################################################



alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
  1
  + 2); // this is multiple line code and its working



Explanation:
// The first alert works as usual as the alert function is called.
// The second alert does not have semicolon but js compiler adds the semicilon by default before next line.
// Third alert works as we have used the template literal so next line it picks and displays the text as it is.
// Fourth alert box also works as we havent given semicolon in between the + or - sign so js sees for the whole expression to complete.  
// ############################################################################################



script.js
let admin = 9, fname = 10.5;
fname = "Guvi";
lname = "geek"
admin = `${fname} ${lname}`;   // Added template literal for spacing
alert(admin); // "Guvi geek" 

// ############################################################################################

// To fix this replaced the name definatio with template literal and alert also replaced the quotes with literals 


let fname = 10.5;
fname = "Guvi";
lname = "geek"
let name = `${fname} ${lname}`;
alert(`hello ${name}`);

//  ############################################################################################

//  To fix this we needed to convert the prompt input stirng to number  


script.js
let a = +prompt("First number?");
let b = +prompt("Second number?");
alert(a + b);

//  ############################################################################################


//To fix this we needed to convert the prompt input stirng to number  


let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);


//  ############################################################################################

//Just invert the condition greater than to less than and diffused will get called 



var a = "2" < "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else {
  console.log("Diffused")
}


//  ############################################################################################
//How to get the success in console.

//Assigned value "" to a coz its falsy

let a = +prompt("Enter a number?");
a = "";
//Don't modify any code below this
if (a) {
  console.log('OMG it works for any number inc 0');
}
else {
  console.log("Success");
}

//  ############################################################################################
//How to get the correct score in console.

// prompt returns a string so we need to parse it to number, added + for prompt return

let value = +prompt('How many runs you scored in this ball');
if (value === 4) {
  console.log("You hit a Four");
} else if (value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

//  ############################################################################################
// /Fix the code to welcome the Employee

//Was unable to debug it

// let login = 'Employee';
// let message = (login == 'Employee') ?
//   (login == 'Director') ? 'Greetings' :
//     (login == '') ? 'No login' :
//       '';
// console.log(message);

//  ############################################################################################
//Fix the code to welcome the boss

//Moved the message variable declaration to global

// You cant change the value of the msg
let message;
let message = null;
if (null || 2 || undefined) {
  message = "welcome boss";
}
else {
  message = "Go away";
}
console.log(message);


//  ############################################################################################
//Fix the code to welcome the boss

//Can be fixed by setting lock = 0 ; which is falsy

let message;
let lock = 0;
//Dont change any code below this 
if (null || lock || undefined) {
  message = "Go away";
}
else {
  message = "welcome";
}
console.log(message);

//  ############################################################################################
//Fix the code to welcome the boss

//Can be fixed by setting lock = 0 ; which is falsy

let message;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined) {
  message = "Go away";
}
else {
  message = "welcome";
}
console.log(message);

//  ############################################################################################
// Change the code to print
// 3
// 2
// 1
//Fix : just replace --i with i--
//You can change only 2 characters
let i = 3;
while (i) {
  console.log(i--);
}

//  ############################################################################################

//Change the code to print 1 to 10 in 4 lines
//used for loop
for (num = 1; num <= 10; num++) {
  console.log(num);
}

//  ############################################################################################
//Change the code to print even numbers

//You are allowed to modify only one character 
//Replaced the increment from +1 to +2
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}

//  ############################################################################################
//Change the code to print all the gifts
//Added template literal to solve the issue

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

//  ############################################################################################
//Fix the code to disarm the bomb.
// Should be not equal to zero sp added confition as more than 1
let countdown = 100;
while (countdown > 1) {
  countdown--;
  if (countdown == 0) {
    console.log("bomb triggered");
  }
}

//  ############################################################################################

//Whats the msg printed and why?
//The "0" is string so its truthy
// The 0 is falsy so its falsy
//Thats why "0" which is lemein is true and passes the condition and goes inside to assign msg with 'hi'

var lemein = '0';
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);

//  ############################################################################################
//Whats the msg printed and why? Guess you answer before running it.
//Same as above

var lemein = '0';
var lemeout = 0;
var msg = '';
if (lemein) {
  msg += 'hi';
}
if (lemeout) {
  msg += 'Hello';
}
console.log(msg);