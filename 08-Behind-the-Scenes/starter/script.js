'use strict';

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1984);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAgeArrow(1984);

const rob = {
  year: 1900,
  calcAge: function (birthYear) {
    console.log(this);
    console.log(2037 - this.year);
  },
};

rob.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = rob.calcAge;
matilda.calcAge();

const f = rob.calcAge;
