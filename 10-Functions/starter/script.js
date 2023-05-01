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
