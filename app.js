console.log("Hello, World!...How are you?");
console.log("This is a simple Node.js application.");
console.log("It prints messages to the console.");
console.log("You can run this application using Node.js.");
console.log("Make sure you have Node.js installed on your machine.");
console.log("Firatolin Tefera"[0] + " is the first letter of my name.");

let USD = 2000;
let ETB = USD * 130;
console.log(`If you have ${USD} USD, you can convert it to ${ETB} ETB.`);

console.log("The current exchange rate is 1 USD = 130 ETB.");

5 > 6;
console.log("5 is greater than 6:", 5 > 6);

let comparision = "5" == 5;
console.log("Is '5' equal to 5 using == operator?", comparision);
let strictComparision = "5" === 5;
console.log("Is '5' equal to 5 using === operator?", strictComparision);
console.log("The strict equality operator (===) checks both value and type.");
console.log("The loose equality operator (==) checks only value.");
console.log("This is a simple demonstration of JavaScript code execution.");

let userPremium = false; // Change this to false to test the other condition
let signedIn = false; // Change this to false to test the other condition

if (userPremium === true) {
  console.log("Welcome, premium user!");
} else if (signedIn === true) {
  console.log("Welcome, signed-in user!");
} else {
  console.log("Welcome, regular user!");
}
console.log(
  "This code demonstrates a simple conditional statement based on user type."
);
let userName = "Firatolin Tefera";
let userAge = 25;
console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);
console.log(
  "This code demonstrates how to declare and use variables in JavaScript."
);
let userHobbies = ["reading", "coding", "traveling"];
console.log("User Hobbies:", userHobbies);
console.log(
  "This code demonstrates how to create and use an array in JavaScript."
);
let userProfile = {
  name: "Firatolin Tefera",
  age: 20,
  hobbies: ["reading", "coding", "traveling"],
};
console.log("User Profile:", userProfile);
console.log(
  "This code demonstrates how to create and use an object in JavaScript."
);
let userSkills = ["JavaScript", "Python", "Java"];
console.log("User Skills:", userSkills);
console.log(
  "This code demonstrates how to create and use an array of skills in JavaScript."
);
let userEducation = {
  degree: "Bachelor's in Computer Science",
  university: "Arsi University",
  graduationYear: 2027,
};
console.log("User Education:", userEducation);
console.log(
  "This code demonstrates how to create and use an object for user education in JavaScript."
);
let userExperience = [
  {
    company: "Tech Solutions",
    position: "Software Engineer",
    duration: "2 years",
  },
  {
    company: "Web Innovations",
    position: "Frontend Developer",
    duration: "1 year",
  },
];
console.log("User Experience:", userExperience);
console.log(
  "This code demonstrates how to create and use an array of objects for user experience in JavaScript."
);
let userAchievements = {
  awards: ["Best Developer 2022", "Employee of the Month"],
  certifications: ["JavaScript Certification", "Python Certification"],
};
console.log("User Achievements:", userAchievements);
console.log(
  "This code demonstrates how to create and use an object for user achievements in JavaScript."
);
console.log(
  "This code is a simple demonstration of JavaScript syntax and features."
);
console.log(
  "It includes variable declarations, conditional statements, arrays, and objects."
);

const greeting = "Hello, World!";
console.log(greeting);
const currentYear = new Date().getFullYear();
console.log(`Current Year: ${currentYear}`);
console.log("This code demonstrates how to use constants in JavaScript.");

let numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
numbers.push(6);
console.log("Updated Numbers Array:", numbers);
console.log(
  "This code demonstrates how to create and manipulate arrays in JavaScript."
);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);
console.log(
  "This code demonstrates how to use the reduce method to calculate the sum of an array."
);

let age = 18;
let hasId = true;

if (age >= 18 || hasId === true) {
  console.log("You are allowed to enter.");
} else {
  console.log("You are not allowed to enter.");
}
console.log(
  "This code demonstrates how to use the logical OR operator (||) in a conditional statement."
);

let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
  console.log("You can relax today!");
} else {
  console.log("You have to work today.");
}
console.log(
  "This code demonstrates how to use the logical OR operator (||) in a different context."
);

let isRaining = true;
isRaining
  ? console.log("Take an umbrella!")
  : console.log("Enjoy the sunshine!");
console.log(
  "This code demonstrates how to use the ternary operator for conditional statements."
);

let userAgeNew = 20;
hasId = true;
userAgeNew >= 18 && hasId
  ? console.log("You can vote!")
  : console.log("You cannot vote.");
console.log(
  "This code demonstrates how to use the logical AND operator (&&) in a conditional statement."
);

let isLoggedIn = true;
hasPromocode = false;
let str =
  isLoggedIn && hasPromocode === true
    ? "Please Enter the PromoCode"
    : "You are not logged in or do not have a promo code.";
console.log(str);
console.log(
  "This code demonstrates how to use the logical AND operator (&&) in a different context."
);

let counter = 0;
while (counter < 5) {
  console.log("Counter:", counter);
  counter++;
}
console.log(
  "This code demonstrates a simple while loop that increments a counter."
);

let counterFor = 1;
while (counterFor <= 5) {
  console.log("I'm a Software Engineer");
  counterFor = counterFor + 1;
}
console.log(
  "This code demonstrates a simple while loop that prints a message and increments a counter."
);

let number = 1;
while (number <= 7) {
  console.log(number);
  number++;
}
console.log(
  "This code demonstrates a simple while loop that prints numbers from 1 to 7."
);

for (let i = 1; i <= 5; i++) {
  console.log("I Love Programming in JavaScript");
}
console.log(
  "This code demonstrates a simple for loop that prints a message multiple times."
);

for (let i = 1; i <= 7; i++) {
  console.log(i);
}
console.log(
  "This code demonstrates a simple for loop that prints numbers from 1 to 7."
);
