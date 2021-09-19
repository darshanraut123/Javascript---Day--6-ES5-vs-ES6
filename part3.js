//GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript
//Fix the code to get the largest of three.
//Code:
//##############################################################################################################################

aa = (f, s, t) => {
    console.log(f, s, t);
    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);

//FIX: THE f , s , t is already declared, so we should skip line no let f,s,t;



//##############################################################################################################################
//Fix the code to Sum of the digits present in the number
//Code:
let n = 123;
console.log(add(n));
function add(n) {
    let sum = 10;
    for (var i = 0; i < n.length; i++) {
        sum += n[i]
    }
    return sum;
}
//FIX: JUST CONVERT THE n to string '123', 
//then split to array ['1','2','3'].
//Then use Number to convert it to array of numbers and then all should work fine


//##############################################################################################################################
//Fix the code to Sum of all numbers using IIFE function
//Code: FIXED
var arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
})();

//FIX: Just remove the ";" after for loop , Silly mistake :D but people like me make it
//It has another mistake too. The condition in for loop is buggy, need to skip the '=' sigh.
//As the arr[arr.length] will give undefined. 
//Either use "i < arr.length" or use "i <= arr.length-1"

//##############################################################################################################################
//Fix the code to gen Title caps.
//Code: FIXED
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
    for (var i = 0; i < arro.length; i++) {
        
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}
ano(arr);
//Fix: Firstly we need to pass the parameter as "ano(arr)" thats first fix.
// And remove the '=' sign from condition

//##############################################################################################################################
//Fix the code to return the Prime numbers
//Code: Fixed
const newArray = [1, 3, 2, 5, 10, 12,15,24,12,64,34,90,43,47.41];
const myPrime = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    if (num === 1) return true;
    else return true;
});
console.log(myPrime);

//FIX: Removed the '=' condition from for loop
//Added return at end with condition


//##############################################################################################################################
//Fix the code to sum the number in that array
//Code:
const num = [10, 20, 30, 40]
const sum = (a, b) =>
    a + b;
const sum1 = num.reduce(sum)
console.log(sum1);
//FIX: Renamed the sum to sum1 as it was already declared


//##############################################################################################################################
//Fix the code to rotate an array by k times and return rotated array using IIFE function
//Code:
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function () {
    let out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr[i];
        count += 1;
    }
    console.log(out);
})();
//Fix: Just removed the "arr = {};" in function, slice method is for arrays not for objects

//##############################################################################################################################
//Fix the code to gen Title caps.
//Code:
var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})();
//Fix: Removed the '=' from condition and interchange the arr[0][i] to arr[i][0]
//##############################################################################################################################
//print all odd numbers in an array using IIFE function
    //Code:

    var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
})();
//Fix: Just add "arr[i] % 2 !== 0" in condition

//##############################################################################################################################
//Fix the code to reverse.
//Code:
(function (str) {
    str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd")
//Fix: Just removed the split(" ") , added split("") and worked fine

//##############################################################################################################################
//Fix the code to remove duplicates.
//Code:
var res = function (arr) {
    let newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
res(["guvi","geek","guvi","duplicate","geeK"]);
//Fix: Many semi colons were missing
//Main fix was the "let newArr = [];" moved it below the function name. Removed from loop

//##############################################################################################################################
//Fix the code to give the below output:
//Expected Output:
[
    { firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
    { firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
]
//Code:
var array = 
[  
    [
        ["firstname", "vasanth"],
        ["lastname", "Raje"],
        ["age", 24],
        ["role", "JSWizard"]
    ],
    [
        ["firstname", "Sri"],
        ["lastname", "Devi"],
        ["age", 28],
        ["role", "Coder"]
    ]
];
let new_object = {};
var final = [];
while (array.length > 0) {
    var outer_remove = array.shift();

    while (outer_remove.length > 0) {
        var inner_remove = outer_remove.shift()
        var key = inner_remove[0]
        var value = inner_remove[1]
        new_object[key] = value
    }
    final.push(new_object);
    new_object = {};
}

console.log(final);
//Fixed : Moved declaration let new_object = {}; to top
// After push emptied the new_object = {};


//##############################################################################################################################
//Fix the code to give the below output:
//Sum of odd numbers in an array
//Code:

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
    if (c % 2 != 0) {
        return a + c;
    }
    return a;
});
console.log(s);
//No fix needed , code works

//##############################################################################################################################
//Fix the code to give the below output:
//Swap the odd and even digits
//Code:
aa = data => {
    var a = data.split("");
    var l ='';
    for (i = 0; i < a.length; i++) {
        
        var s = a[i + 1]
        var b = a[i]
        l += s
        l += b
        i = i + 1
    }
    if ((a.length % 2) != 0) {
        l += a[a.length - 1]
    }
    console.log(`ANS : ${l}`);
}
aa("1234");

//Moved declaration of l at top