/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times. The winner with the
highest average score wins a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no teams wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
*/

let dolphinsScore = (100 + 108 + 100) / 3;
let koalasScore = (107 + 100 + 100) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && (dolphinsScore >= 100)) {
    console.log("Team dolphins wins 🏆");
} else if (dolphinsScore === koalasScore && (dolphinsScore >= 100)) {
    console.log("The result is a draw ");
} else if (dolphinsScore < koalasScore && (koalasScore >= 100)) {
    console.log("Team koalas wins 🏆 " + koalasScore);
} else {
    console.log("No one wins this game 😢");
}