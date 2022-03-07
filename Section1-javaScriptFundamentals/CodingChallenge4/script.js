//////////////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator
for whenever he goes eating in a restaurant. In his country,
it is usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value.
Create a variable called 'tip' for this.It's not allowed to use an 
if/else statement😅 (play only with ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example : ` The bill was 275, the tip was 41.25, and the total value 316.251`

TEST DATA: Test for bill values 275, 40 and 430

*/

let billValue = +prompt("Enter a bill value : ");

let tip = (billValue >= 50 && (billValue <= 300)) ? billValue * 0.15 : billValue * 0.20;

console.log("bill value is : " + billValue, "tip is : " + tip, "the final value is :" + (billValue + tip));