// variable scope = where a variable is accesible

// let = variables are limited to block scpoe {}
// var = variables are limited to a function() {}

// gobal variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

var name = "Bro";

doSomething();

function doSomething(){
    for(var i = 1; i <= 3; i+=1){
        //console.log(i)
    }
}

console.log(i)