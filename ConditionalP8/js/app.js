const birthYear = 2010;
const currentYear = 2024;
const favoriteNumber = 14;

let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);
// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

if (isChild) {
  console.log("Drink milk");
}
if (isTeenager) {
  console.log("Eat your pimples");
}
if (isAdult) {
  console.log("Go to work, slave");
}
console.log(favoriteNumber);

if (favoriteNumber > ageOfPerson) {
  console.log("Favorite Number is Greater");
}

else if (favoriteNumber === ageOfPerson) {
  console.log("They are the same!")
}

else {
  console.log("Age is Greater");
}

if (favoriteNumber & 2 === 0) {
  console.log("Favorite Number is Even");
}
else {
  console.log("Favorite Number is Odd");
}

console.log("Favorite Number is Even");
console.log("Favorite Number is Odd");


function makeLasagne () {
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}

makeLasagne();
makeLasagne();
