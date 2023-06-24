const decrement = document.getElementById("decrement-btn");
// console.log(decrement);
const increment = document.getElementById("increment-btn"); 
// console.log(increment);

const reset = document.getElementById("reset-btn");

const display = document.getElementById("display-value");


decrement.addEventListener("click", () => {
    const value = Number(display.innerText);
    if(value > 0) {
        display.innerText = value-1;
    }
    else{
        alert("netgative number not allowed")
    }

    
})

increment.addEventListener("click", () => {
    const value = Number(display.innerText);
    if(value >= 10) {
        alert("10+ value not are not allowed");
    }
    else{
        display.innerText = value+1;
    }

    
})

reset.addEventListener("click", () => {
    const value = Number(display.innerText)
    display.innerText = 0;
})