let operators = ["/", "*", "-", "+", "="];

const leftDiv = document.querySelector("#left-side");
const rightDiv = document.querySelector("#right-side");

function createButton(text) {
    const btn = document.createElement("button"); 
    btn.setAttribute("style", "background-color: rgb(118, 149, 118)");
    btn.style.borderRadius = "10px";
    btn.textContent = `${text}`;
    return btn;
}

for (let i=0; i<10; i++) {
    const numberBtn = createButton(i);
    leftDiv.appendChild(numberBtn);
}

operators.map((operator) => {
    const opBtn = createButton(operator);
    return rightDiv.appendChild(opBtn);
});
