// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const defaultResult = 0;

function add(num1, num2) {
  const result = num1 + num2;
  return 'The result is ' + result;
}

console.log(add(1, 2));
console.log(add(5, 5));

let currentResult = add(1, 3);
currentResult = defaultResult; //copy of the const var above

currentResult = ((currentResult + 10) * 3) / 2 - 1;
// let currentDescription = '(' + defaultResult + ' * 10 ) * 3 / 2 - 1';
let currentDescription = `( ${defaultResult} + 1 * 10 ) * 3 / 2 -1`;
console.log(currentResult, currentDescription);
