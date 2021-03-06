const currentRes = document.querySelector('.current-result');
const previousRes = document.querySelector('.previous-result');

document.querySelectorAll('.numbers').forEach((btn) => {
  btn.addEventListener('click', () => {
    enterNumber(btn.innerText);
    updRes();
  });
});
document.querySelectorAll('.operations').forEach((btn) => {
  btn.addEventListener('click', () => {
    selectOperations(btn.innerText);
    updRes();
  });
});  
document.querySelector('.delete').addEventListener('click', () => {
  deleteLastNumber();
  updRes();
});  
document.querySelector('.equals').addEventListener('click', () => {
  calculate();
  updRes();
});  
document.querySelector('.clear').addEventListener('click', () => {
  clearRes();
  updRes();
});
document.querySelector('.change-sign').addEventListener('click', () => {
  changeSign();
  updRes();
});

let currentNumber = '';
let lastNumber = '';
let operation;

const calculate = () => {
  let calculation;

  if(!lastNumber || !currentNumber) {
    return;
  }
  
  const arg1 = parseFloat(lastNumber);
  const arg2 = parseFloat(currentNumber);   

  if(isNaN(arg1) || isNaN(arg2)) {
    return;
  }

  switch (operation) {
    case '+':
      calculation = arg1 + arg2;
      break;
    case '-':
      calculation = arg1 - arg2;
      break;
    case '*':
      calculation = arg1 * arg2;
      break;
    case '÷':
      if(arg2 === 0) {
        alert(`Ошибка! Нельзя делить на ноль!`)
        clearRes()
        return;        
      }

      calculation = arg1 / arg2;
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
    const arg1 = previousRes.innerText;

    if(currentNumber.toString() === '0' &&  arg1[arg1.length - 1] === '÷') {
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