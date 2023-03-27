'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (Ingredient1, Ingredient2, Ingredient3) {
//     console.log(
//       `Here is your pasta, I think you ordered your food with ${Ingredient1}, ${Ingredient2}, and ${Ingredient3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// // called method with an object of options
// restaurant.orderDelivery({
//   time: '22:30',
//   address: "Lil' Grays",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Big Grays',
//   starterIndex: 1,
// });

// // Destructuring
// // ...SPREAD OPERATOR - because it's on the right of the =
// const testArr = [1, 2, ...[3, 4]];
// console.log(`testArr: ${testArr}`);
// // REST ELEMENT - because it's on the left of the =
// const [e, f, ...others] = [1, 2, 3, 4, 5];
// console.log(e, f, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // Destructuring Objects
// const { categories, openingHours } = restaurant;
// console.log(categories, openingHours);

// // Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log('sum:', sum);
// };

// add(1, 2, 3);
// add(5, 6, 7, 8, 9);
// add(2002, 2012, 2017, 2023);

// const z = [9, 10, 14, 2009];

// add(...z);

// const toppings = [
//   'cheese',
//   'mushroom',
//   'pineapple',
//   'pepperoni',
//   'ham',
//   'onion',
//   'jalepeno',
// ];

// restaurant.orderPizza(...toppings);

// // destructuring and renaming the variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // setting defaults, setting defaults while changing the variable name
// // this is great for receiving data that when you don't know what it will look like
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// // console.log(fri); // why did we get fri in the console?
// // console.log(open, close);
// console.log(o, c);

// // Destructuring Arrays
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 3, [4, 5]];

// // const [i, , j] = nested;
// // console.log(i, j);
// // console.log(nested[2][0], nested[2][1]);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const arr = [7, 8, 9];

// //rest operator
// const array = [7, 8, 9];
// const newArray = [5, 6, ...array];
// console.log(newArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //shallow copy of array
// const mainMenuCopy = [...restaurant.mainMenu];
// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu2);

// //Iterables; arrays, strings, maps, sets. NOT objects.
// const string = 'Robert';
// console.log(...string);

// const ingredients = [
//   // prompt(`Let\'s make pasta! Ingredient 1`),
//   // prompt(`Ingredient 2`),
//   // prompt(`Ingredient 3`),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log('newRestaurant', newRestaurant);

// const restaurantCopy = { ...restaurant };
// console.log('restaurantCopy:', restaurantCopy);

// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// console.log('cheat day: 20.03.23');

// console.log('------ OR ------');

// // use ANY data type, return ANY data type, short circuiting
// // OR operator will return the first truthy value of all the operands, or the last item if all the values are falsey
// console.log(3 || 'Rob');
// console.log('' || 'Rob');
// console.log(true || 0);
// console.log(undefined || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// // Short circuiting
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('------ AND ------');

// // AND operator will return the first falsey value of all the operands, or the last item if all the values are truthy
// console.log(0 && 'Rob');
// console.log(4 && 'Rob');

// console.log('Hello' && true && 22 && 'Rob' && 0);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'ham', 'olives', 'sun dried tomatos');
// }

// restaurant.orderPizza && restaurant.orderPizza('cheese', 'spinach', 'egg');

// console.log('------ nullish coalescing operator ------');

// // nullish coalescing operator
// restaurant.numGuests = 0;
// // this wont work as the value of restaurant.numGuests is zero, that's why we would use the nullish coalescing operator
// const guests3 = restaurant.numGuests || 10;
// console.log(guests1);

// // nullish values are; null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log('------ logical assignment operator ------');

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // console.log(rest1);

// // rest2.numGuests = rest2.numGuests || 10;
// // console.log(rest2);

// // OR assignment operator - asigns a value to a variable if that value is falsey
// // rest1.numGuests ||= 10;
// // console.log(`OR assignment operator `, rest1);

// // rest2.numGuests ||= 10;
// // console.log(`OR assignment operator `, rest2);

// //nullish asignment operator (null or undefined)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // rest2.owner = rest2.owner && `<ANONYMOUS>`;

// rest2.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;

// console.log(`AND assignment operator `, rest1);
// console.log(`AND assignment operator `, rest2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #2 - Let's continue with our football betting app!

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field  players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new  array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = (...playerNames) => {
  console.log(playerNames);
};

printGoals('Rob', 'Tom', 'Max');
// 7. The team with the lower odd is more likely to win. Print to the consolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
game.scored.forEach((item, i) => {
  console.log(`Goal #${i + 1} scored by ${item}`);
});

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
Object.keys(game.odds).forEach(item => {
  sum += game.odds[item];
});
sum / game.odds.length;
console.log(`Average odds: ${sum}`);
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// console.log(game.odds);
let message = '';

message += `Odds of victory - ${game.team1}: ${game.odds.team1} \n`;
message += `Odds of a draw - ${game.odds.x} \n`;
message += `Odds of victory - ${game.team2}: ${game.odds.team2} \n`;

console.log(message);

// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

for (const [key, value] of Object.entries(game)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"

const scorers = {
  //loop over both arrays
  //make an object from that?
};

// // 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
