'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
console.log(accounts);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = (acc, sort = false) => {
  containerMovements.innerHTML = '';

  let movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = acc => {
  const mainBalanceEl = document.querySelector('.balance__value');
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  mainBalanceEl.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outgoings = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoings)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((interest, i, arr) => {
      // console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      //.split()method creates an array, so wecan run the map method straight on it
      .split(' ')
      // name.slice(0, 1);
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

//event handler
let currentAccount;

const updateUI = acc => {
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  displayMovements(acc);
};

btnLogin.addEventListener('click', e => {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //clear focus
    inputLoginPin.blur();
    // updateUI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    inputTransferAmount.value = inputTransferTo.value = '';
    // updateUI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  // can provide loan as long as there's a deposit in account for at least 10% of loan value
  const amount = +inputLoanAmount.value;
  // if there is a deposit larger than 10% of the loan value
  // if at leat one of the elements in the movements array matched the conditional
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movements
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  // const userName = inputCloseUsername.value;
  // const userPin = +inputClosePin.value;
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const deleteAccountIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(deleteAccountIndex, 1);
  }
  // console.log(accounts);
  inputCloseUsername.value = inputClosePin.value = '';
  containerApp.style.opacity = 0;
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );
// return acc > mov ? (acc = mov) : mov; // incorrect logic, think about things!!

// console.log(movements);
// console.log(max);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// //get the last item in an array
// console.log(arr.slice(-1));
// console.log(arr.slice(2, -2));
// //makes a shallow copy of the array
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE - same as SLICE but mutates the original array
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// //REVERSE
// //mutates original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));

// const arr3 = [44, 12, 76];
// //old way
// console.log(arr3[0]);
// //new way
// console.log(arr3.at(0));

// //get the last element (old ways)
// console.log(arr3.slice(-1)[0]);
// console.log(arr3[arr3.length - 1]);
// //get the last element (new way)
// console.log(arr3.at(-1));

// //also works on strings
// console.log('Rob Catlin'.at(0));
// console.log('Rob Catlin'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   movement < 0
//     ? console.log(`Withdrawl: £${movement}`)
//     : console.log(`Deposit: £${movement}`);
//   console.log(i + 1);
// }

// movements.forEach((item, index, array) => {
//   item < 0
//     ? console.log(`Tx #${index + 1} - Withdrawl: £${Math.abs(item)}`)
//     : console.log(`Tx #${index + 1} - Deposit: £${item}`);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// //Sets
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR', 'GBP']);

// console.log(currenciesUnique);

// currenciesUnique.forEach((value, _value, set) => {
//   console.log(`${value}: ${_value}`);
// });

// Working With Arrays

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = (arr1, arr2) => {
//   const arr1New = arr1.slice(1, arr1.length - 2);
//   console.log(arr1New);
//   const fullDogArray = [...arr1New, ...arr2];
//   fullDogArray.forEach((item, i) => {
//     item < 3
//       ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//       : console.log(
//           `Dog number ${i + 1} is an adult, and is ${item} years old`
//         );
//   });
// };

// checkDogs(dogsJulia, dogsKate);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

// 2. Create an array with both Julia's (corrected) and Kate's data

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")

// 4. Run the function for both test data sets

// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] §
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far
// const eurosToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurosToUsd);

// console.log(movements);
// console.log(movementsUSD);

// //same result, but using a totally different method (forOf loop) to acchieve the same outcome
// const movementsUSDForOf = [];

// for (const mov of movements) movementsUSDForOf.push(mov * eurosToUsd);

// console.log(movementsUSDForOf);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Tx #${i + 1} - ${mov < 0 ? 'Withdrawl' : 'Deposit'}: £${Math.abs(mov)}`
//   // return mov < 0
//   //   ? `Tx #${index + 1} - Withdrawl: £${Math.abs(item)}`
//   //   : `Tx #${index + 1} - Deposit: £${item}`;
// );

// console.log(movementDescriptions);

//filter method
// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

// const depositsForOf = [];
// for (const mov of movements) mov > 0 && depositsForOf.push(mov);
// console.log(depositsForOf);

//reduce method
// console.log(movements);
//accumulator is like a snowball
// const balance = movements.reduce((acc, current, i, array) => {
//   console.log(`Iteration ${i + 1}: Current value: ${acc}`);
//   return acc + current;
// }, 0);

// const balance = movements.reduce((acc, current, i, array) => acc + current, 0);

// console.log(balance);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// const calcAverageHumanAge = ages => {
//   const inHumanYears = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // console.log(inHumanYears);

//   const adultDogs = inHumanYears.filter(age => age > 17);
//   // console.log(adultDogs);

//   const humanAge =
//     adultDogs.reduce((acc, val) => acc + val, 0) / adultDogs.length;
//   return humanAge;
//   // console.log(`Human Age: ${humanAge}`);
//   // const averageHumanAge = humanAge / adultDogs.length;
//   // console.log(humanAge);
// };

// const avr1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avr2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avr1);
// console.log(avr2);

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

// 4. Run the function for both test data sets

// Test data:
// Data1:[5,2,4,1,15,8,3]
// Data2:[16,6,10,5,6,1,4]

// const euroToUsd = 1.1;

// //pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   // .map((mov, i, arr) => {
//   //   console.log(arr);
//   //   return mov * euroToUsd;
//   // })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

// const calcAverageHumanAge = ages => {
//   const inHumanYears = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age > 17)
//     .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
//   return inHumanYears;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Test data:
// Data1:[5,2,4,1,15,8,3]
// Data2:[16,6,10,5,6,1,4]

//find method - doesn't return a new array, only the first element that matches
// const firstWithdrwal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrwal);

// console.log(accounts);

// const accounts2 = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(accounts2);

// console.log(movements);
// // some: includes only tests for equality
// console.log(movements.includes(-130));
// // some tests for condition(s)
// const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);

// // every
// // only returns true if every element passes the test
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr);
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// // flat() method takes an integer that determines how many leveles of nested arrays to flatten
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// flat() method
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

// // flatMap() method
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance2);

// sort() method - Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // sort() method - Numbers
// console.log(movements);
// console.log(movements.sort());

// // return < 0, A, B (keep order)
// // return > 0, B, A (change order)

// // ascending
// // movements.sort((a, b) => (a > b ? 1 : -1));
// movements.sort((a, b) => a - b);
// console.log(movements);

// // descending
// // movements.sort((a, b) => (a > b ? 1 : -1));
// movements.sort((a, b) => b - a);
// console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
// fill() method can set start and finishof the fill, similar to the slice array method
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const zz = Array.from(arr);
console.log(`zz: ${zz}`);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => +el.textContent.replace('€', '')
  );
  console.log(movementsUI);
});

// 100 random dicerolls
// const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;
// const rollResults = Array.from({ length: 100 }, (_, i) => randomDiceRoll());
// console.log(rollResults);

///////////////////////////////////////////////
// Array method practice

// exercise #1
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // exercise #2 a
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000);
// console.log(numDeposits1000);

// // exercise #2 b
// const numDeposits1000Reduce = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000Reduce);

// let a = 10;
// // this only returns the current value = 10, not the updated value = 11
// console.log(a++);
// console.log(a);
// // prefixed operator ++
// // this returns the updated value
// console.log(++a);

// // exercise #3
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// // exercise #4
// const convertTitleCase = str => {
//   const capitalise = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const string = str
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalise(word)))
//     .join(' ');
//   return capitalise(string);
// };

// console.log(convertTitleCase('Blah a blah and blah'));
// console.log(convertTitleCase('a blah and blah'));

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.

// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.

// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Your tasks:

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog eats too ${
    dogSarah.recFood < dogSarah.curFood ? 'much' : 'little'
  }`
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// .filter() makes a new array from the original, but only items that pass a conditional
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dog eats too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eats too little`);

// const ownersEatTooLittle = dogs.filter(dog => dog.recFood > dog.curFood);
// console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3,like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
const checkEatingOk = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOk));
// console.log(dogs.some(dog => checkEatingOk(dog)));

// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const eatingOkAmount = dogs.filter(checkEatingOk);
console.log(eatingOkAmount);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs.slice().sort((a, b) => {
  a.recommendedFood - b.recommendedFood;
});
console.log(dogsSorted);
// Hints:
// Use many different tools to solve these challenges, you can use the summary lecture to choose between them

// Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// Test data:
// const dogs = [
// { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, { weight: 8, curFood: 200, owners: ['Matilda'] },
// { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
