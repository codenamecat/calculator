const calculationElement = document.getElementById('calculation-element');
const resultElement = document.getElementById('result-element');

const equalsBtn = document.getElementById('equals-btn');

const backspaceBtn = document.getElementById('backspace-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

const calcBtns = [...document.querySelectorAll('.calc-btn')];

let currentInput = '';
let lastButtonType = null;

calcBtns.forEach((button) => {
  button.addEventListener('click', () => {
    handleButtonClick(button.textContent);
  });
});

function handleButtonClick(buttonValue) {
  if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
    if (lastButtonType === 'operator' || lastButtonType === null) {
      displayResult('Syntax error');
    } else {
      currentInput = '';
      lastButtonType = 'operator';
      displayCalculation(buttonValue);
    }
  } else {
    currentInput += buttonValue;
    lastButtonType = 'number';
    displayCalculation(buttonValue);
  }
}

function displayCalculation(character) {
  calculationElement.textContent += character;
}

function displayResult(value) {
  calculationElement.textContent = '';
  resultElement.textContent = value;
}

clearAllBtn.addEventListener('click', () => {
  currentInput = '';
  lastButtonType = null;
  displayResult('');
});

equalsBtn.addEventListener('click', () => {
  if (lastButtonType === 'operator' || lastButtonType === null) {
    displayResult('Syntax error');
  } else {
    const result = eval(calculationElement.textContent);
    displayResult(result);
  }
});

backspaceBtn.addEventListener('click', () => {
  removeLastCharacter();
});

function removeLastCharacter() {
  const currentCalc = calculationElement.textContent;
  const newCalc = currentCalc.slice(0, -1);
  calculationElement.textContent = newCalc;
  currentInput = newCalc;
  lastButtonType = currentCalc.slice(-1) === '+' || currentCalc.slice(-1) === '-' || currentCalc.slice(-1) === '*' || currentCalc.slice(-1) === '/' ? 'operator' : 'number';
}
