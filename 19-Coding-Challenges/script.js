// JavaScript Fundamentals – Part 1

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
let Mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  BMI: null,
};

let John = {
  name: "John",
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
  let markHigherBMI;
  Mark.BMI = user1BMI;
  return user1BMI > user2BMI ? (markHigherBMI = true) : null;
}
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
