const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') :
    console.log('I like to drink water 🥚');

const drink = age >= 18 ? 'wine 🍸' : 'water 🥚';
console.log(drink);

// template literal
console.log(`I like to drink ${drink}`);