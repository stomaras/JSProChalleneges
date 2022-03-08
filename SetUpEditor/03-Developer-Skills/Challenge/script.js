/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 2 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Test data 1: [17,21,23]



*/
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(temperatures) {
  for (var i = 0; i < temperatures.length; i++) {
    console.log(` ${temperatures[i]} "in" ${i + 1} "days ..." `);
  }
}

printForecast(data1);
