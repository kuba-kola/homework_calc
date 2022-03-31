const numbersBtn = document.querySelectorAll('.numbers');
const operationsBtn = document.querySelectorAll('.operations');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const signChangeBtn = document.querySelector('.change-sign');
const currentRes = document.querySelector('.current-result');
const previousRes = document.querySelector('.previous-result');

let currentNumber = '';
let lastNumber = '';
let operation = undefined;

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
        clearRes()
        return;        
      }

      calculation = previous / current;
      break;           
    default:
      return;
  }

  if (Number.isInteger(calculation)) {
    currentNumber = calculation;
  } else {
    currentNumber = calculation.toFixed(8);
  }  
  operation = undefined;
  lastNumber = '';  
}

const selectOperations = (operator) => {
  if(currentNumber === '') {
    return;
  }
  if(lastNumber !== '') {
    const previous = previousRes.innerText;

    if(currentNumber.toString() === '0' &&  previous[previous.length - 1] === '÷') {
     clearRes();
      return;
    } 

    calculate();
  }

  operation = operator;
  lastNumber = currentNumber;
  currentNumber = '';
}

const enterNumber = (num) => {
  if(num === '.') {
    if(currentNumber.includes('.')) {
      return
    }
    num = '.';
  }

  currentNumber = currentNumber.toString() + num.toString();
}

const changeSign = () => {
  currentNumber = currentNumber * -1;
}

const deleteLastNumber = () => {
  currentNumber = currentNumber.toString().slice(0, -1);
}
  
const updRes = () => {
  currentRes.innerText = currentNumber;

  if(operation != null) {
    previousRes.innerText = lastNumber + operation;
  } else {
    previousRes.innerText = '';
  }
}

const clearRes = () => {
  currentNumber = '';
  operation = undefined;
  lastNumber = '';
}

numbersBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    enterNumber(btn.innerText);
    updRes();
  })
})
  
operationsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectOperations(btn.innerText);
    updRes();
  })
})
  
equalsBtn.addEventListener('click', () => {
  calculate();
  updRes();
})

signChangeBtn.addEventListener('click', () => {
  changeSign();
  updRes();
})
  
deleteBtn.addEventListener('click', () => {
  deleteLastNumber();
  updRes();
})
  
clearBtn.addEventListener('click', () => {
  clearRes();
  updRes();
})