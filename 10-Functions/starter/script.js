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

transformer('Rob Catlin is dope yo', upperFirstWord);
console.log('=====================================');
transformer("how are y'all doing today?", upperFirstLetter);

const high5 = () => {
  console.log('👋');
};

document.body.addEventListener('click', high5);
