// let js = 'amazing';

// console.log(6 + 3);

// let firstName = "Jonas";
// console.log(firstName)
// firstName = 3
// console.log(firstName)

// example of undefined
// let year;
// console.log(year);

// console.log(typeof null);

// const ageHonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageHonas, ageSarah);

// const firstName = 'Jonas';
// const lastName = 'Tomaras';
// console.log(firstName + " " + lastName);

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using this formula: BMI = mass / height ** 2.
(mass in kg and height in meter).

1. Store Marks's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than john.

*/

let marksWeight = 78;
let johnWeight = 92;
let marksHeight = 1.69;
let johnHeight = 1.95;
let markHigherBMI = true;

let marksBMI = marksHeight / marksHeight ** 2;
let johnsBMI = johnHeight / johnHeight ** 2;

if (marksBMI > johnsBMI) {
    console.log(marksBMI + " is higher than johns " + johnsBMI);
    console.log(markHigherBMI);
} else if (marksBMI < johnsBMI) {
    console.log(marksBMI + " is lesser than johns " + johnsBMI);
    console.log(markHigherBMI);
} else {
    console.log("both bmi are the same");
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Template Literals
const firstName = 'Spyros';
const job = 'programmer';
const birthYear = 1997;
const year = 2022;

const tom = "I am " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(tom);

const tomNew = `I'm ${firstName}, a ${job}`;
console.log(tomNew);

// Let's write a program which checks whether a person is allowed to start taking a driver's license or not
// and if she is, then it will print that to the console and if not it will print how many years are left
// until the person can start taking the driver's license.

const age = 15;

if (age >= 18) {
    console.log('Arah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Arah is to young. Wait another ${yearsLeft} years:)`);
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log('I am ' + 23 + " years old");
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' / '2');
console.log('2' * '3');

console.log("23" - "11" - 3);

let n = '1' + 1;
n = n - 1;
console.log(n);// 10 result


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const favourite = prompt("What's your favorite number");
console.log(favourite);
console.log(typeof favourite);






