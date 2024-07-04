// create user interface for the calculator: 
let operators = ["/", "*", "-", "+", "="];

const leftDiv = document.querySelector("#left-side");
const rightDiv = document.querySelector("#right-side");

function createButton(text) {
    const btn = document.createElement("button"); 
    btn.setAttribute("style", "background-color: rgb(63, 105, 179)");
    btn.style.border = "2px solid rgb(38, 56, 86)";
    btn.style.borderRadius = "0.75vw";
    btn.textContent = `${text}`;
    return btn;
}
const clearBtn = createButton("CLEAR");
const zeroBtn = createButton("0");

zeroBtn.setAttribute("style", "width: 180px");
zeroBtn.style.backgroundColor = "rgb(63, 105, 179)";
zeroBtn.style.borderRadius = "1vw";
leftDiv.appendChild(zeroBtn);

for (let i=1; i<10; i++) {
    const numberBtn = createButton(i);
    leftDiv.appendChild(numberBtn);
}

clearBtn.setAttribute("style", "width: 180px");
clearBtn.style.backgroundColor = "rgb(63, 105, 179)";
clearBtn.style.borderRadius = "1vw";
leftDiv.appendChild(clearBtn);

operators.map((operator) => {
    const opBtn = createButton(operator);
    return rightDiv.appendChild(opBtn);
});


// logic to make the calculator work: 
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

