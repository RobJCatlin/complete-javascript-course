'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 way
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(booking);
};

createBooking('ABA104');
createBooking('ABA104', 2, 499);
createBooking('ABA104', 5);

createBooking('ABA104', undefined, 650);

const flight = 'LH234';

const rob = {
  name: 'Rob Catlin',
  passport: 13620976829,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.passport = 13620976829
    ? console.log('Checked in')
    : console.log('Not checked in');
};

checkIn(flight, rob);
console.log(flight);
console.log(rob);
console.log();

const oneWord = str => str.replace(/ /g, '');
console.log(oneWord('Hi my name is Rob Catlin'));

const upperFirstLetter = str => {
  const [firstLetter, ...otherLetters] = str.toLowerCase();
  const newWord = firstLetter.toUpperCase() + otherLetters.join('');
  return newWord;
};

upperFirstLetter('catlin');
upperFirstLetter('boOk');
upperFirstLetter('super Amazing shit balls');

const upperFirstWord = str => {
  const [firstWord, ...otherWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
  // console.log([firstWord.toUpperCase(), ...otherWords].join(' '));
  // return;
};

upperFirstWord('Rob Catlin is Amazing!!!!');
upperFirstWord('Amazing Rob Catlin is (Yoda) *********************');

const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// higher-order function
transformer('Rob Catlin is dope yo', upperFirstWord);
console.log('=====================================');
transformer("how are y'all doing today?", upperFirstLetter);

const high5 = () => {
  console.log('👋');
};

document.body.addEventListener('click', high5);

console.log('functions that return functions - promises?');

const greeting = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeting2 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHeya = greeting('Heya');

greeterHeya('Robbie');
greeterHeya('Jamie');

greeting('Heya')('Rob');
greeting2('Yo')('Bobby');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(44, 'Rob Catlin');
lufthansa.book(635, 'Mike Hunt');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`
    );
  },
};

//storing the lufthansa book() method in the book variable to be reused
const book = lufthansa.book;
console.log(book);

// doesn't work as the 'this' keyword doesn't know what to point to
// book(877, 'Harry Barry');

eurowings.book(877, 'Harry Barry');

//call method
console.log(`.call() method`);
// first argument passed to the call method is what the this keyword will refer to
book.call(eurowings, 444, 'Parold Barold');
console.log(eurowings);

book.call(lufthansa, 777, 'Mary Berry');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//apply method
console.log('.apply() method');

const flightData = [583, 'Bob Cooper'];
//old way
book.apply(swiss, flightData);
//new way using the spread operator
book.call(swiss, ...flightData);

//bind method
// book.call(eurowings, 444, 'Parold Barold');
//using the .bind() method you can bind something to the 'this' keyword
//you can just use .bind() once, rather than using .call() each time
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Stephen Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Dawn Owen');

//with eventListeners

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(50));

//CHALLENGE
//create a function which can return a function which does this - const addVAT = addTax.bind(null, 0.23);
const addTaxFunc = value => {
  return function (rate) {
    console.log(`Value: ${value} * ${rate} = ${value + value * rate}`);
  };
};

addTaxFunc(100)(0.23);
addTaxFunc(23)(0.23);

const addTaxFunc2 = value => rate =>
  console.log(`Value: ${value} * ${rate} = ${value + value * rate}`);

addTaxFunc2(100)(0.23);
addTaxFunc2(23)(0.23);
addTaxFunc2(20)(0.2);

const addTaxRate = rate => {
  return function (value) {
    console.log(`Value: ${value} * ${rate} = ${value + value * rate}`);
  };
};

const addVAT2 = addTaxRate(0.23);

addVAT2(100);
addVAT2(23);

// A Closer Look at Functions

// Coding Challenge #1
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  // [0,0,0,0]
  registerNewAnswer() {
    const answer = +prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );

    // answer !== NaN && answer <= 3
    //   ? this.answers[answer]++
    //   : this.registerNewAnswer();

    // console.log(this.answers);
    // console.log(typeof newAnswer);
    console.log(`answers.length = ${this.answers.length}`);
    console.log(`answers.length test = ${this.answers[4 - 1]}`);

    //short circuiting - the && makes the last part
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
  //how to give 'type' argument to displayResults()?
  // displayResults(type) {
  //   // if (type === typeof string) {
  //   //   return console.log('string');
  //   // } else if (type === typeof array) {
  //   //   return console.log('array');
  //   // }
  //   console.log(this.answers);
  // },
};

// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

// 1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)

// 2. Call this method whenever the user clicks the "Answerpoll" button.

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 3. Create a method 'displayResults' which displays the poll results.
// The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data1 });
poll.displayResults.call({ answers: data2 }, 'string');
poll.displayResults.call({ answers: data2 });

// Test data for bonus:
// § Data1:[5,2,3]
// § Data2:[1,5,3,9,6,1]
// Hints: Use many of the tools you learned about in this and the last section

const runOnce = () => {
  console.log('This will never run again!');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again!');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => {
  console.log('This will ALSO never run again!');
})();

{
  const isPrivate = 50;
  var isPrivate2 = 33;
}

// console.log(isPrivate);
console.log(isPrivate2);

//closures
const secureBooking = () => {
  let passengerCount = 0;
  return () => {
    passengerCount++;
    passengerCount === 1
      ? console.log(`${passengerCount} passenger`)
      : console.log(`${passengerCount} passengers`);
  };
};

//this variable saves the returned function and has access to all variables that were present in it's parent function at the time it was created ('born')
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
