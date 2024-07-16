const leftDiv = document.querySelector("#left-side");
const rightDiv = document.querySelector("#right-side");
const calcDisplay = document.querySelector("#display");
let displayValue = "", firstNumber = "", secondNumber = "", operator; 

function populateDisplay(val) {
    calcDisplay.textContent = `${val}`;
}

function createButton(text) {
    const btn = document.createElement("button"); 
    btn.setAttribute("style", "background-color: rgb(63, 105, 179)");
    btn.style.borderRadius = "1vw";
    btn.textContent = `${text}`;
    return btn;
}

const clearBtn = createButton("CLEAR");
clearBtn.setAttribute("style", "width: 180px");
clearBtn.style.backgroundColor = "rgb(63, 105, 179)";
clearBtn.style.borderRadius = "1vw";
leftDiv.appendChild(clearBtn);


for (let i=9; i>-1; --i) {
    const numberBtn = createButton(i);
    leftDiv.appendChild(numberBtn);
}

let operators = ["/", "*", "-", "+", "="];
operators.map((operator) => {
    const opBtn = createButton(operator);
    rightDiv.appendChild(opBtn);
});

function storeVal(displayVal) {
    let opIndex;
    let arr = displayVal.split('');
    console.log(arr);
    arr.forEach(char => {
        if (operators.includes(char)) {
            opIndex = arr.indexOf(char);
            operator = char; 
        } else {
            if (opIndex == undefined) {
                firstNumber += char;
                console.log("firstNumber:", firstNumber);
            } else {
                secondNumber += char;
                console.log("secondNumber:", secondNumber);
            }
        }
    })
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "rgb(217, 228, 248)";
        button.style.color = "rgb(63, 105, 179)";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "rgb(63, 105, 179)";
        button.style.color = "rgb(217, 228, 248)";
    })
    button.addEventListener("click", () => {
        if (button.textContent == "CLEAR") {
            displayValue = "";
        } else if (button.textContent == "=") {
            storeVal(displayValue);
            displayValue = operate(operator, firstNumber, secondNumber);
        } else {
            displayValue += button.textContent;
        }
        populateDisplay(displayValue);
    })
})

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
    if (operator == "+") {
        return add(parseInt(firstNum), parseInt(secondNum));
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
    }
}