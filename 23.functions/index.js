// function = Define code once, and use it many times.
//            To perform some code, call th function name.

startProgram();

function startProgram(){
    let userName = "Bro";
    let age = 21;

    happyBirthday(userName, age);
}
function happyBirthday(a, b){
    console.log("Happy birthady to you!");
    console.log("Happy birthady to you!");
    console.log("Happy birthady dear", a);
    console.log("Happy birthady to you!");
    console.log("You are", b, "years old");
} 