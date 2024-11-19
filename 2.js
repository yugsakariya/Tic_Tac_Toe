let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgc=document.querySelector(".msg-container");
let cont=document.querySelector("main");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#newgame");
let turnX=true;
let a=false;
    const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetgame =() =>{
    turnX=true;
    enable();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnX){
            box.textContent="X";
            turnX=false;
        }else{
            box.textContent="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
function checkWinner() {
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                console.log("winner is",val1);
                cont.style.display="none";
                msg.innerText=`Winner is ${val1} `
                msgc.style.display="block";
                
            }
        }
    } 
}
console.log(boxes);
const check =() =>{
    if()
}
const enable = () =>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}

newgame.addEventListener("click",()=>{
    console.log("reset was clicked");
    location.reload();
})
reset.addEventListener("click", resetgame)
