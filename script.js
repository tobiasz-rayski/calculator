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
