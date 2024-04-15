// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray)

// An array SHOULD be used with values of a single data type
const myArray2 = ["James", "Sam", "Xavier"];

// A) ARRAY PROPERTIES
console.log("Number of elements in mappedArray: " + myArray2.length)


// B) ARRAY METHODS

// i - map function of an array (e.g. used for displaying a list of products dynamically)
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];
const arrMultiplyBy10 = mappedArray.map(item => item * 10);

const arr = mappedArray.map(function (item) { return item * 20; });

console.log(arrMultiplyBy10);
console.log(arr);

// ii - filter function of an array (e.g. used for filtering a list of products)
// Implement your code here
const vowels = ["a", "e", "i", "o", "u"];
const filteredVowels = vowels.filter(vowel => vowel == "a" || "u");
console.log(filteredVowels); // ["a", "u"]

const vowels2 = ["a", "e", "i", "o"];
const filteredVowels2 = vowels2.filter(vowel => vowel == "a" || vowel == "u");
console.log(filteredVowels2); // ["a"]

// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lemon"]

// Sort by descending order
// Implement your code here (short-form using ternary functions)
const descendingNums = nums.sort((a, b) => a > b ? -1 : 1);
console.log(descendingNums); // [6, 5, 4, 3, 2, 1]

// Long-form 
const descendingNums2 = nums.sort((a, b) => {
    if (a > b)
        return -1;
    else
        return 1
})
console.log(descendingNums2);

// Sort by ascending order
// Implement your code here (short-form using ternary functions)
const ascendingNames = names.sort((a, b) => a > b ? 1 : -1);
console.log(ascendingNames);

const ascendingNames2 = names.sort((a, b) => {
    if (a > b)
    return 1
else
return -1
})
console.log(ascendingNames2);

// iv - reduce function of an array (transform array to single value which is a multiplication of all values in the array)
// Implement your code here
const numbers = [1, 2, 3, 4];
const productOfNumbers = numbers.reduce((a, b) => a*b);
console.log(productOfNumbers); // 24

// another approach of applying a reduce function of an array (JS is a looser language)
// Implement your code here
function product(a,b){
    return a*b
}
const productOfNums2 = numbers.reduce(product);
console.log(productOfNums2);

// Longer form
// function product(a,b){
//     return a*b
// }
// const productOfNums2 = numbers.reduce((a,b) => product(a,b));
// console.log(productOfNums2);


// v - pushing values (to the end) in an existing array
const teamList = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];
teamList.push("Muhaimin");

console.log("Team 1: " + teamList); //Team 1: Tanna,Shia Lyn,Zhi Yan,Francis,Muhaimin
console.log(teamList.indexOf("Muhaimin")); //4

// vi - Splicing

//Scenario 1 (splicing the team):
const teamList2 = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];
teamList2.push("Muhaimin"); //['Tanna', 'Shia Lyn', 'Zhi Yan', 'Francis', 'Muhaimin']
const extractedMembers = teamList2.splice(0, 2); //cut values starting from index and ends before the 2nd idex
console.log(extractedMembers); //['Tanna', 'Shia Lyn']
console.log(teamList2); // ['Zhi Yan', 'Francis', 'Muhaimin']

//Scenario 2 (splicing and add Colin in the middle)
const teamList3 = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];
teamList3.push("Muhaimin");
const updatedTeamList3 = [...teamList3.splice(0,2), "Colin", ...teamList3];
console.log(updatedTeamList3); //['Tanna', 'Shia Lyn', 'Colin', 'Zhi Yan', 'Francis', 'Muhaimin']

// vvi - Reverse
console.log(updatedTeamList3.reverse()); //['Muhaimin', 'Francis', 'Zhi Yan', 'Colin', 'Shia Lyn', 'Tanna']



// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here

// Prints out "The weekend is here!" (applying ternary operator)
let countdown = 0;
for (let index = 10; index >= countdown; index--) {
    (index > countdown) ? console.log(index) : console.log("The weekend is here!");
}

// Prints out 0
// let countdown = 0;
// for (let index = 10; index >= countdown; index--) {
//     console.log(countdown);
// }

// ii - for-each loop
// Implement your code here
const tickerSymbols = ["FB", "AAPL", "AMZN", "NFLX", "GOOG"];
tickerSymbols.forEach(ticker => console.log(ticker));

const productListing = [{name: "Jordan 3", price: "$100"}, {name: "Nike Dunks", price: "$150"}];
productListing.forEach(item => console.log(item));

// iii - do-while loop (execute first, check for the condition later)
// Implement your code here
let getName = "";
 
do{ // start executing first
    getName = prompt("Please enter your name:");
    
    if(getName !== "")
        document.getElementById("displayName").textContent = getName;
 
} while(getName == ""); // check later

// let getName = "";

// do{ // start executing first
//     getname = prompt("Please enter your name:");

//     if(getName !== "")
//     document.getElementById("displayName").textContent = getName;

// } while(getName == ""); // check later

// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

// let getName2 = "";

// while(getName == ""){ //check first, before executing
//     getName2 = prompt("Please enter your name:");

//     if(getName2 !== "")
//     document.getElementById("displayName").textContent = getName;
// }