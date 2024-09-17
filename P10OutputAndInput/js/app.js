//Exercise1 Multiply By Self
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(add(5, 20));


//Exercise2 average
const firstNumber = 6
const secondNumber = 2

function average(firstNumber, secondNumber) {
  return (firstNumber + secondNumber)/2;
}
console.log(average(6, 2));


//Exercise3 two inputs and one outcome
const firstName = 'Ben';
const lastName = 'Ting';
function welcome(firstName, lastName) {
  return 'Welcome' + ' ' + firstName + ' ' + lastName + '!';
}
console.log(welcome(firstName, lastName));


//Exercise4 Get a random number
function getRandomInt() {
  return Math.floor(Math.random() * 10000);
}
console.log(getRandomInt());



//Exercise
function numberToLetter(num) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  return letters[num];
}
console.log(numberToLetter(4));
console.log(numberToLetter(5));


function convertNumbersToLetters(number) {
  if (number === 0) {
    return 'A';
  } else if (number === 1) {
    return 'B';
  } else if (number === 2) {
    return 'C';
  }
    else {
      return 'Invalide Number';
  }
}
console.log(convertNumbersToLetters(2));


//function evaluateResult(firstNumber, secondNumber); {
//  let string
//
//  return string
//}

