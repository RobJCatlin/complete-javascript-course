'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //Oldschoolway of doing
//   // openingHours: openingHours,

//   //ES6 Enhanced object literals
//   openingHours,

//   // order: function (starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },

//   //ES6 Enhanced object literals - you can omit the semi-colon and function keyword.
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta(Ingredient1, Ingredient2, Ingredient3) {
//     console.log(
//       `Here is your pasta, I think you ordered your food with ${Ingredient1}, ${Ingredient2}, and ${Ingredient3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// // console.log(restaurant.openingHours);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //With optional chaining ?.
// if (restaurant?.openingHours?.mon)
//   console.log(restaurant.openingHours.mon.open);

// const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(restaurant.openingHours);
//   // console.log(restaurant.openingHours[day]);
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// console.log('------ methods ------');

// console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method doesn't exist`);

// console.log('------ arrays ------');

// const users = [
//   {
//     name: `Rob`,
//     email: `rob@bobobob.com`,
//   },
// ];

// console.log(users[0]?.name);
// // we use optional chaining with the nullish coalescing operator so we can actually do something when we don't get a value from the object or arrayon the right hand side
// console.log(users[2]?.name ?? `Nah bro, that's not a thing`);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open}, and close at ${close}`);
// }

// console.log(restaurant);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`Oldschool way of doing For Of loop: ${item}`);
// }

// // new way of doing For Of loop with destructuring
// for (const [i, item] of menu.entries()) {
//   // console.log(i, item);
//   // console.log(`${item[0] + 1}: ${item[1]}`);
//   console.log(`${i + 1}: ${item}`);
// }

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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field  players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new  array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const [team1, draw, team2] = game.odds;
// console.log(team1, draw, team2);
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// console.log('cheat day: 09.04.23');
// console.log('holiday: 10.04.23');
// console.log('holiday: 11.04.23');

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = (...playerNames) => {
//   console.log(`${playerNames}, Total goals scored: ${playerNames.length}`);
// };
// const printGoals = function (...playerNames) {
//   console.log(`${playerNames}, Total goals scored: ${playerNames.length}.`);
// };

// printGoals('rob', 'tom');
// printGoals(...game.scored);

// printGoals('Rob', 'Tom', 'Max');
// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// team1 < team2 && console.log(`Team 1 is more likey to win`);
// team1 > team2 && console.log(`Team 2 is more likey to win`);

// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// game.scored.forEach((item, i) => {
//   console.log(`Goal #${i + 1} scored by ${item}`);
// });

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let sum = 0;
// Object.keys(game.odds).forEach(item => {
//   sum += game.odds[item];
// });
// sum / game.odds.length;
// console.log(`Average odds: ${sum}`);
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // console.log(game.odds);
// let message = '';

// message += `Odds of victory - ${game.team1}: ${game.odds.team1} \n`;
// message += `Odds of a draw - ${game.odds.x} \n`;
// message += `Odds of victory - ${game.team2}: ${game.odds.team2} \n`;

// console.log(message);

// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// for (const [i, scorer] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} - ${scorer}`);
// }

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamString = team === 'x' ? 'draw' : `${game[team]} victory`;
//   console.log(`Odds of ${teamString}: ${odd}`);
// }

// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(`${key}: ${value}`);
// }

// const scorers = {
//   //loop over both arrays
//   //make an object from that?
// };

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

// console.log('Cheat day: 01/04/23');
// console.log('Cheat day: 02/04/23');

// console.log('------ sets ------');

// const orderSet = new Set([
//   'Pizza',
//   'Pasta',
//   'Pasta',
//   'Risotto',
//   'Pizza',
//   'Pasta',
// ]);

// console.log(orderSet);
// console.log(new Set('Robert'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //example
// const staff = ['Waiter', 'Manager', 'Cleaner', 'Waiter', 'Chef', 'Chef'];
// // const staffUnique = new Set(staff);
// //turn set into an array
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Manager', 'Cleaner', 'Waiter', 'Chef', 'Chef']).size
// );

// console.log('------ maps ------');

// const restaurant = new Map();
// restaurant.set('name', "Rob's Place");
// console.log(restaurant);

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // Coding Challenge #3 - Let's continue with our football betting app!

// //This time, we have a map called 'gameEvents' (see above) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// // Your tasks:

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// // this is how you make an array from a Set
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);

// // 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// const time = [...gameEvents.keys()].pop();

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17: ⚽   GOAL
// gameEvents.forEach((item, index) => {
//   // index <= 45
//   //   ? console.log(`[FIRST HALF] - ${index}: ${item}`)
//   //   : console.log(`[SECOND HALF] - ${index}: ${item}`);
//   const half = index <= 45 ? FIRST : SECOND;
//   console.log(`[${half} HALF] - ${index}: ${item}`);
// });

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// // console.log(plane[2]);
// console.log(typeof plane[2]);
// console.log(typeof +plane[3]);

// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log('Portugal');
// console.log('portugal');

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = seat => {
//   // B & E are middle seats
//   const seatNumber = seat.slice(-1);
//   const middleSeat = seatNumber === 'B' || seatNumber === 'E' ? true : false;
//   if (middleSeat) console.log('You got the middle seat 💩');
//   else console.log('You got lucky 🍀');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('24C');
// checkMiddleSeat('13A');
// checkMiddleSeat('4D');
// checkMiddleSeat('27E');

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'JoNAs';
// console.log(passenger);
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const passengerNameCorrect = passengerName => {
//   const nameLowerCase = passengerName.toLowerCase();
//   const passengerCorrect =
//     nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
//   console.log(passengerCorrect);
// };

// passengerNameCorrect('ROb');
// passengerNameCorrect('JamIE');
// passengerNameCorrect('mAx');
// passengerNameCorrect('John');

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const normalisedEmail = loginEmail.trim().toLowerCase();
// console.log(normalisedEmail);
// console.log(normalisedEmail === email);

// const matchingItems = (item1, item2) =>
//   item1 === item2 ? console.log(true) : console.log(false);

// matchingItems('hello@jonas.io', 'hello@jonas.io');
// matchingItems('hello@jonas.io', 'hello@jonijdnfijas.io');

// //replacing
// const price = '288,97£';
// const priceUS = price.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement);

// console.log(announcement.replace('door', 'gate'));
// //regex
// console.log(announcement.replace(/door/g, 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// //booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Air') && plane.endsWith('neo')) {
//   console.log(`Part of the NEW Airbus family`);
// }

// //practice exercise
// const checkBaggage = items => {
//   const baggage = items.toLowerCase();
//   baggage.includes('gun') || baggage.includes('knife')
//     ? console.log('Illegal items!')
//     : console.log('Free to board');
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and a camera');
// checkBaggage('I have some snacks and a gun for protection');

// //split and join string methods
// console.log('a+very+nice+string+'.split('+'));
// console.log('Rob Catlin'.split(' '));
// console.log('Max Catlin-Owen'.split('Ca'));
// console.log('Ivy Catlin-Owen'.split('-'));

// const [firstName, lastName] = 'Rob Catlin'.split(' ');
// const newNameTest = ['Mr.', firstName, lastName.toUpperCase()];
// console.log(newNameTest);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitaliseName = name => {
//   const nameSplit = name.split(' ');
//   const namesUpper = [];
//   nameSplit.forEach(item => {
//     // namesUpper.push(item[0].toUpperCase() + item.slice(1));
//     namesUpper.push(item.replace(item[0], item[0].toUpperCase()));
//   });
//   console.log(namesUpper.join(' '));
// };

// capitaliseName('jessica ann smith davis');
// capitaliseName('rob james catlin');
// capitaliseName('sammy davis jr.');

// console.log('========= ========== ==========');

// // Coding Challenge #4

// // Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// // The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

// // Test data (pasted to textarea, including spaces):
// // underscore_case;
// // first_name;
// // Some_Variable;
// // calculate_AGE;
// // delayed_departure;

// // Should produce this output (5 separate console.log outputs): underscoreCase ✅
// // firstName ✅
// // someVariable ✅
// // calculateAge ✅
// // delayedDeparture ✅

// // Hints:
// // § Remember which character defines a new line in the textarea 😉
// // § The solution only needs to work for a variable made out of 2 words, like a_b
// // § Start without worrying about the ✅. Tackle that only after you have the variable
// // name conversion working 😉
// // § This challenge is difficult on purpose, so start watching the solution in case
// // you're stuck. Then pause and continue!
// // Afterwards, test with your own test data! GOOD LUCK 😀
// //  ✅
// //   ✅
// // ✅
// // ✅
// //    ✅
// // ✅
// // ✅
// //     ✅
// // ✅
// // ✅

// //   underscore_case;
// // first_name;
// //  Some_Variable;
// // calculate_AGE;
// //   delayed_departure;

// document.body.append(document.createElement('textarea'));
// const txtArea = document.querySelector('textarea');

// const data = ` underscore_case
// first_name
//  Some_Variable
// calculate_AGE
//   delayed_departure`;

// txtArea.append(data);

// document.body.append(document.createElement('button'));

// const toCamelCase = text => {
//   const inputVal = document.querySelector('textarea').value;
//   const inputSplit = inputVal.split('\n');

//   console.log(inputSplit);
//   const tickEmoji = '✅';

//   for (const [index, item] of inputSplit.entries()) {
//     const [first, second] = item.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${tickEmoji.repeat(index + 1)}`);
//   }
//   // inputSplit.forEach(item => {
//   //   // split by the underscore
//   //   const inputSplit = item.trim().toLowerCase().split('_');
//   //   //take the first letter after the underscore
//   //   console.log(inputSplit[1]);
//   //   newInputArr.push(
//   //     inputSplit[1].replace(inputSplit[1], inputSplit[1].toUpperCase())
//   //   );
//   //   console.log(newInputArr);
//   //   //toUpperCase()
//   //   //replace the first letter after the underscore with the capital letter
//   //   //.join(' ')
//   // });
// };

// document.querySelector('button').addEventListener('click', toCamelCase);

// // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
