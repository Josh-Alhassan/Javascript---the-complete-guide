// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let currentResult = 0;

currentResult = (currentResult + 10) * 3 / 2 - 1;
console.log(currentResult, '');