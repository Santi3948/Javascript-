// ternary operator = Shortcut for an "if/else statement"
//                    Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False

// condition ? exprIfTrue : exprIfFalse

checkWinner(false);

function checkWinner(win){
    win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}
