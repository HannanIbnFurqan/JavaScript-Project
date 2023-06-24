
let btn = document.getElementById("button");
const randomColor = () =>{

    let val = "0123456789ABCDEF";
    let cons = "#";

    for(let i = 0; i < 6; i++) {
        cons = cons+val[Math.floor(Math.random()*16)];
    }

    return cons;

};

function colorRandomchange(){
    let color = randomColor();
    document.body.style.background = color;
    document.getElementById("color").innerText = color;
    btn.style.color = color;
}
btn.addEventListener("click",colorRandomchange);