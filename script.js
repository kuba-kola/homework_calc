const numbersBtn = document.querySelectorAll('.numbers');
const operationsBtn = document.querySelectorAll('.operations');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const signChangeBtn = document.querySelector('.change-sign');
const currentOperand = document.querySelector('[data-current-operand]');
const previousOperand = document.querySelector('[data-previous-operand]');
let newNumberFlag = false

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
