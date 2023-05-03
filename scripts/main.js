// Calculator "screen"
const calculationElement = document.getElementById('calculation-element');
const resultElement = document.getElementById('result-element');
// equals button
const equalsBtn = document.getElementById('equals-btn');

const backspaceBtn = document.getElementById('backspace-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

const calcBtns = [...document.querySelectorAll('.calc-btn')];

calcBtns.forEach((button) => {
    button.addEventListener('click', () => {
        displayCalculation(button.textContent);
    });
});

function displayCalculation(character) {
    calculationElement.textContent += character;
}

clearAllBtn.addEventListener('click', () => {
    calculationElement.textContent = '';
    resultElement.textContent = '';
});

equalsBtn.addEventListener('click', () => {
    const result = eval(calculationElement.textContent);
    resultElement.textContent = result;
});

backspaceBtn.addEventListener('click', () => {
    removeLastCharacter();
});

function removeLastCharacter() {
    const currentCalc = calculationElement.textContent;
    const newCalc = currentCalc.slice(0, -1);
    calculationElement.textContent = newCalc;
}

// CODE GRAVEYARD

// calculationElement.textContent = "stuffx";

// console.log(calculationElement.textContent[calculationElement.textContent.length-1]);

    // if (calculationElement.textContent[calculationElement.textContent.length-1] == "+" || "-" || "/" || "*") {
    //     console.log("WTF DOOD");
    // } else {}

// const number0 = document.getElementById('0');
// const number1 = document.getElementById('1');
// const number2 = document.getElementById('2');
// const number3 = document.getElementById('3');
// const number4 = document.getElementById('4');
// const number5 = document.getElementById('5');
// const number6 = document.getElementById('6');
// const number7 = document.getElementById('7');
// const number8 = document.getElementById('8');
// const number9 = document.getElementById('9');

// const plusBtn = document.getElementById('plus-btn');
// const minusBtn = document.getElementById('minus-btn');
// const multiplyBtn = document.getElementById('multiply-btn');
// const divideBtn = document.getElementById('divide-btn');