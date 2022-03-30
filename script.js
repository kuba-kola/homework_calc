const numbersBtn = document.querySelectorAll('.numbers');
const operationsBtn = document.querySelectorAll('.operations');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const signChangeBtn = document.querySelector('.change-sign');
const currentRes = document.querySelector('[data-current-result]');
const previousRes = document.querySelector('[data-previous-result]');

let currentNumber = '';
let lastNumber = '';
let operation = undefined;

numbersBtn.forEach((button) => {
    button.addEventListener('click', enterNumber);
});
operationsBtn.forEach((button) => {
    button.addEventListener('click', enterOperation);
});
deleteBtn.forEach('click', deleteLastNumber);
equalsBtn.forEach('click', enterEquals);
clearBtn.forEach('click', clearAll);
signChangeBtn.forEach('click', signChange);

const calculate = () => {
    let calculation;

    if(!lastNumber || !currentNumber) {
      return;
    }
  
    const previous = parseFloat(lastNumber);
    const current = parseFloat(currentNumber);
  
    if(isNaN(previous) || isNaN(current)) {
      return;
    }
  
    switch (operation) {
      case '+':
        calculation = previous + current;
        break;
        case '-':
          calculation = previous - current;
        break;
        case '*':
          calculation = previous * current;
        break;
        case '÷':
          if(current === 0) {
            clearResult();
            return;
          }
  
          calculation = previous / current;
        break;        
      default:
        return;
    }

    currentNumber = calculation;
    operation = undefined;
    lastNumber = '';  
}
