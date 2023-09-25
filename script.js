let displayBox = document.querySelector(".display");
let equal_pressed = 0;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function showDisplay(event) {
    if (equal_pressed == 1) {
        displayBox.innerText = 0;
        equal_pressed = 0;
   };
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = event;
    }
    return displayBox.innerHTML += event;
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
    item.addEventListener("click", (event) => showDisplay(event.target.innerText))
});
window.addEventListener('keydown', (event) => {
    if (event.key.includes(numbers[event.key])) {
        return showDisplay(event.key)
    } else if (event.key === "Backspace") {
        return clear()
    } else if (event.key === "Enter") {
        return calculate()
    }
})