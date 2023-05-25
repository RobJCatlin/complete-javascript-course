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

const displayMovements = acc => {
  containerMovements.innerHTML = '';
  acc.movements.forEach((mov, i) => {
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

  // console.log(currentAccount);

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

    //start logout timer
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
  console.log(accounts);
  inputCloseUsername.value = inputClosePin.value = '';
  containerApp.style.opacity = 0;
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
