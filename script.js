// Declare string variable (display)
// Declare two variables for calculations
// Declare object with booleans (operators)
//
// Number pressed
//    add value to string (display) variable
//    update display
//
// Operator pressed
//    if all operators are false
//    switch appropriate boolean value to true
//    add string value to a variable for calculations
//    reset string value
//
//    if an operator is true
//    switch true operator to false
//    switch appropriate operator to true
//
//    if an operator is true
//    and string is not empty
//    switch true operator to false
//    switch appropriate operator to true
//    -> Equals
//
// Number pressed
//
// ...
//
// Equals pressed
//    add current string (display) value to second variable (for calculations)
//    check for boolean, if true then run appropriate func
//    add result to string (display) and update display (round to .##)
//
// Reset Calculator
//      change variables to 0
//      empty string
//      update display
//      booleans to false

let displayValue = "";
let value_1 = 0;
let value_2 = 0;

let operators = {
  add: {
    active: false,
    calculate: () => {
      return value_1 + value_2;
    },
  },

  subtract: {
    active: false,
    calculate: () => {
      return value_1 - value_2;
    },
  },

  multiply: {
    active: false,
    calculate: () => {
      return value_1 * value_2;
    },
  },

  divide: {
    active: false,
    calculate: () => {
      return value_1 / value_2;
    },
  },
};

const numberButtons = document.querySelectorAll(".number");
const display = document.getElementById("display");
const resetButton = document.getElementById("reset");
const addButton = document.getElementById("add");
const equalsButton = document.getElementById("equals");
const buttons = document.querySelectorAll("button");

function resetEverything() {
  value_1 = 0;
  value_2 = 0;
  displayValue = "";
  display.textContent = "";
  resetOperators();
}

function resetOperators() {
  for (let key in operators) {
    operators[key].active = false;
  }
}

function operatorsFalse() {
  for (let key in operators) {
    if (operators[key].active === true) {
      return false;
    }
  }
  return true;
}

function check(operator) {
  if (operatorsFalse()) {
    operators[operator].active = true;
    value_1 = parseFloat(displayValue);
    displayValue = "";
  } else if (operatorsFalse() === false && displayValue !== "") {
    resetOperators();
    operators[operator].active = true;
    calculate();
  }
}

function calculate() {
  value_2 = parseFloat(displayValue);
  for (let key in operators) {
    if (operators[key].active === true) {
      displayValue = operators[key].calculate();
      display.textContent = displayValue;
      value_1 = parseFloat(displayValue);
      displayValue = "";
    }
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.textContent;
    display.textContent = displayValue;
  });
});

resetButton.addEventListener("click", resetEverything);

addButton.addEventListener("click", () => {
  check("add");
});

equalsButton.addEventListener("click", calculate);
