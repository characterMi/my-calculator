let displayBox = document.querySelector(".display");
let equal_pressed = 0;


function showDisplay(event) {
    const x = event.target.innerText;
    if (equal_pressed == 1) {
        displayBox.innerText = 0;
        equal_pressed = 0;
   };
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function calculate() {
    equal_pressed = 1;
    let result = displayBox.innerText;
    try {
        displayBox.innerText = eval(result);
    } catch(err) {
        alert("Invalid Input")
    }
};

function allClear() {
    displayBox.innerText = 0;
}

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else { 
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);
let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})