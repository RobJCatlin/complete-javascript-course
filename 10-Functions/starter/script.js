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
