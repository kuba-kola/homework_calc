const numbersBtn = document.querySelectorAll('.numbers');
const operationsBtn = document.querySelectorAll('.operations');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const changeSignBtn = document.querySelector('.change-sign');
const currentOperand = document.querySelector('[data-current-operand]');
const previousOperand = document.querySelector('[data-previous-operand]');

numbersBtn.forEach((button) => {
    button.addEventListener('click', enterNumber);
});
operationsBtn.forEach((button) => {
    button.addEventListener('click', enterOperation);
});
deleteBtn.forEach('click', deleteLastNumber);
equalsBtn.forEach('click', enterEqualsBtn );
clearBtn.forEach('click', clearAll);
changeSignBtn.forEach('click', signChange);

function enterNumber(event) {
    const newNumber = event.target.textContent;
    const currentNumber = carrentOperand.value;

    if (newNumberFlag) {
        if (newNumber === '.') {
            carrentOperand.value = '0.';
            newNumberFlag = false;
            return;
        }

        carrentOperand.value = newNumber;
        newNumberFlag = false;
        return;
    }

    if (newNumber === '.' && currentNumber.includes('.')) {
    carrentOperand.value = currentNumber;
    return;
    }

    if (currentNumber === '0' && newNumber === '.') {
    carrentOperand.value = `${currentNumber}${newNumber}`;
    return;
    }

    if (currentNumber === '0') {
    carrentOperand.value = newNumber;
    return;
    }

    carrentOperand.value = `${currentNumber}${newNumber}`;
    

}

// class Calculator {
// }