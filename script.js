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
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
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
  } else {
    resetOperators();
    operators[operator].active = true;
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

subtractButton.addEventListener("click", () => {
  check("subtract");
});

multiplyButton.addEventListener("click", () => {
  check("multiply");
});

divideButton.addEventListener("click", () => {
  check("divide");
});

equalsButton.addEventListener("click", calculate);

document.addEventListener("keydown", function (event) {
  const key = event.key;

  numberButtons.forEach(function (button) {
    if (button.textContent === key) {
      displayValue += button.textContent;
      display.textContent = displayValue;
    }
  });
});
