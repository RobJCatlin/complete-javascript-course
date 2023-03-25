'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (Ingredient1, Ingredient2, Ingredient3) {
    console.log(
      `Here is your pasta, I think you ordered your food with ${Ingredient1}, ${Ingredient2}, and ${Ingredient3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// called method with an object of options
restaurant.orderDelivery({
  time: '22:30',
  address: "Lil' Grays",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Big Grays',
  starterIndex: 1,
});

// Destructuring
// ...SPREAD OPERATOR - because it's on the right of the =
const testArr = [1, 2, ...[3, 4]];
console.log(`testArr: ${testArr}`);
// REST ELEMENT - because it's on the left of the =
const [e, f, ...others] = [1, 2, 3, 4, 5];
console.log(e, f, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Destructuring Objects
const { categories, openingHours } = restaurant;
console.log(categories, openingHours);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('sum:', sum);
};

add(1, 2, 3);
add(5, 6, 7, 8, 9);
add(2002, 2012, 2017, 2023);

const z = [9, 10, 14, 2009];

add(...z);

const toppings = [
  'cheese',
  'mushroom',
  'pineapple',
  'pepperoni',
  'ham',
  'onion',
  'jalepeno',
];

restaurant.orderPizza(...toppings);

// destructuring and renaming the variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// setting defaults, setting defaults while changing the variable name
// this is great for receiving data that when you don't know what it will look like
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;

// console.log(fri); // why did we get fri in the console?
// console.log(open, close);
console.log(o, c);

// Destructuring Arrays
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [4, 5]];

// const [i, , j] = nested;
// console.log(i, j);
// console.log(nested[2][0], nested[2][1]);
const [i, , [j, k]] = nested;
console.log(i, j, k);

const arr = [7, 8, 9];

//rest operator
const array = [7, 8, 9];
const newArray = [5, 6, ...array];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

//Iterables; arrays, strings, maps, sets. NOT objects.
const string = 'Robert';
console.log(...string);

const ingredients = [
  // prompt(`Let\'s make pasta! Ingredient 1`),
  // prompt(`Ingredient 2`),
  // prompt(`Ingredient 3`),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log('newRestaurant', newRestaurant);

const restaurantCopy = { ...restaurant };
console.log('restaurantCopy:', restaurantCopy);

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

console.log('cheat day: 20.03.23');

console.log('------ OR ------');

// use ANY data type, return ANY data type, short circuiting
// OR operator will return the first truthy value of all the operands, or the last item if all the values are falsey
console.log(3 || 'Rob');
console.log('' || 'Rob');
console.log(true || 0);
console.log(undefined || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// Short circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND ------');

// AND operator will return the first falsey value of all the operands, or the last item if all the values are truthy
console.log(0 && 'Rob');
console.log(4 && 'Rob');

console.log('Hello' && true && 22 && 'Rob' && 0);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'ham', 'olives', 'sun dried tomatos');
}

restaurant.orderPizza && restaurant.orderPizza('cheese', 'spinach', 'egg');

console.log('------ nullish coalescing operator ------');

// nullish coalescing operator
restaurant.numGuests = 0;
// this wont work as the value of restaurant.numGuests is zero, that's why we would use the nullish coalescing operator
const guests3 = restaurant.numGuests || 10;
console.log(guests1);

// nullish values are; null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('------ logical assignment operator ------');

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// console.log(rest1);

// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest2);

// OR assignment operator - asigns a value to a variable if that value is falsey
// rest1.numGuests ||= 10;
// console.log(`OR assignment operator `, rest1);

// rest2.numGuests ||= 10;
// console.log(`OR assignment operator `, rest2);

//nullish asignment operator (null or undefined)
rest1.numGuests ??= 10;
console.log(`OR assignment operator `, rest1);
rest2.numGuests ??= 10;
console.log(`OR assignment operator `, rest2);

rest2.owner = rest2.owner && `<ANONYMOUS>`;
