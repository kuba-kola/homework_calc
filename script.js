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

numbersBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    enterNumber(btn.innerText);
    updRes();
  })
})
  
operationsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectOperations(btn.innerText)
    updRes()
  })
})
  
equalsBtn.addEventListener('click', () => {
  calculate()
  updRes()
})
  
deleteBtn.addEventListener('click', () => {
  deleteLastNumber()
  updRes()
})
  
clearBtn.addEventListener('click', () => {
  clearResult()
  updRes()
})