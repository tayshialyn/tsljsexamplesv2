// let ans = 10;
// let ansString = "ten";

// let userInput = prompt("Guess the number. Press q or Q to quit.");

// while(userInput.toUpperCase() != "Q"){ // as long as the user doesn't enter 'q' AND 'Q', run the loop
    
//     if(userInput == ans || userInput.toLowerCase() == ansString){ // if user's answer is a number 10 or the string value "ten" / "TEN" / "Ten"
        
//         alert("You are correct!!");
//         break;
        
//     }else if(!userInput){ // else if the user's input is undefined == false (!false == true)
        
//         userInput = prompt("Your answer is empty. Please try again."); 
        
//     }
//     else if (userInput > ans){
        
//         userInput = prompt("Your answer is too high! Try again");
        
//     }
//     else if (userInput < ans){
        
//         userInput = prompt("Your answer is too low! Try again");
        
//     }
//     else{
//         userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.")
//     }
// }


// let userInput = prompt("Guess the number. Press q or Q to quit.");

// while(userInput.toUpperCase() != "Q"){ // as long as the user doesn't enter 'q' AND 'Q', run the loop
//     switch (userInput) {
//         case userInput == ans || userInput.toLowerCase() == ansString:

//     }

let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.");

while (userInput.toUpperCase() !== "Q") {
    switch (true) {
        case userInput == ans || userInput.toLowerCase() == ansString:
            alert("You are correct!!");
            userInput = "Q"; // Exit loop
            break;
        case !userInput:
            userInput = prompt("Your answer is empty. Please try again.");
            break;
        case userInput > ans:
            userInput = prompt("Your answer is too high! Try again");
            break;
        case userInput < ans:
            userInput = prompt("Your answer is too low! Try again");
            break;
        default:
            userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");
    }
}