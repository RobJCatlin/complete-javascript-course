// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
let Mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,
  BMI: null,
};

let John = {
  name: 'John',
  mass: 92,
  height: 1.95,
  BMI: null,
};
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
function CompareBMI(user1, user2) {
  //how can I DRY loop this shit?
  var user1BMI = user1.mass / (user1.height * user1.height);
  var user2BMI = user2.mass / (user2.height * user2.height);

  if (user1BMI > user2BMI) {
    console.log(`${user1.name} has a higher BMI of ${user1BMI}`);
  } else {
    console.log(`${user2.name} has a higher BMI of ${user2BMI}`);
  }
  let markHigherBMI;
  Mark.BMI = user1BMI;
  user1BMI > user2BMI ? (markHigherBMI = true) : null;
  return;
}
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// 2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
let koalasScores = [88, 91, 110];
let dolphinsScores = [96, 108, 89];

const averageScoreCalculator = arr =>
  arr.reduce((preVal, currVal) => preVal + currVal, 0) / arr.length;

let dolphinsAverageScore = averageScoreCalculator(dolphinsScores);
let koalasAverageScore = averageScoreCalculator(koalasScores);

console.log(`The Dolphins average score is ${dolphinsAverageScore}`);
console.log(`The Koalas average score is ${koalasAverageScore}`);

// 1. Calculate the average score for each team,using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if (
  dolphinsAverageScore === koalasAverageScore &&
  koalasAverageScore >= 100 &&
  dolphinsAverageScore >= 100
) {
  console.log("It's a draw");
} else if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore >= 100
) {
  console.log(
    `The Dolphins win with an average score of ${dolphinsAverageScore}`
  );
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(`The Koalas win with an average score of ${koalasAverageScore}`);
}
// 3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Bill: $${bill}, Tip: $${tip}, Total: $${tip + bill}`);

// 2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430

//Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Fundamentals – Part 2

// Coding Challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

const dolphinsScore = [44, 23, 71];
const koalasScore = [65, 54, 49];

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = arr =>
  arr.reduce((preVal, currVal) => preVal + currVal, 0) / arr.length;

// 2. Use the function to calculate the average for both teams

const dolphinAvg = calcAverage(dolphinsScore);
const koalaAvg = calcAverage(koalasScore);
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"

// 4. Use the 'checkWinner' function to determine the winner for both Data1 and Data 2
const checkWinner = (data1, data2) =>
  data1 > data2 && data1 >= data2 * 2
    ? `Dolphins win (${data1} vs. ${data2})`
    : `Koalas win (${data2} vs. ${data1})`;
// 5. Ignore draws this time
const data = checkWinner(dolphinAvg, koalaAvg);
console.log(data);
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
const calcTip = billValue =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// 2. And now let's use arrays! So create an array 'bills' containing the test data below

const bills = [125, 555, 44];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip Test data: 125, 555 and 44
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// Test data: 125, 555 and 44
console.log(bills, tips, totals);
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// task
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

const message = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
console.log(message);

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return;
  },
};

// 2. Create a 'calcBMI' method on each object to calculate the BMI (thesame method on both objects). Store the BMI value to a property, and also return it from the method
mark.calcBMI();
john.calcBMI();

console.log(`Mark's height is ${mark.bmi}`);
console.log(`John's height is ${john.bmi}`);
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// if (mark.bmi > john.bmi) {
//   console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
// } else {
//   console.log(`John's BMI (${john.bmi}) is higher than Mark's! (${mark.bmi})`);
// }

mark.bmi > john.bmi
  ? console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
  : console.log(
      `John's BMI (${john.bmi}) is higher than Mark's! (${mark.bmi})`
    );
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:

// 1. Create an array 'bills' containing all 10 test bill values
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips2 = [];
const totals2 = [];
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// const calcTip = billValue =>
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

for (let i = 0; i < bills2.length; i++) {
  // tips2.push(calcTip(bills2[i]));
  // totals2.push(bills2[i] + calcTip(bills2[i]));
  const tip = calcTip(bills2[i]);
  tips2.push(tip);
  totals2.push(tip + bills2[i]);
  //use variable tip to avoid calculation the tip twice
}

// console.log(bills2, tips2, totals2);

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉 Bonus:

// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

const calcAverage2 = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }
  return (sum = sum / arr.length);
};

calcAverage2(totals2);

// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together

// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)

// 4.3. Call the function with the 'totals' array;
