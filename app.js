let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = 1; 
let count = 0;


const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame=()=>{
    turno=1;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=1;
        }
        box.disabled=1;
        count++;
        let iswinner=checkWinner();
        if(count==9 && !iswinner){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText='game  draw';
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = 1;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let p1 = boxes[pattern[0]].innerText;
      let p2 = boxes[pattern[1]].innerText;
      let p3 = boxes[pattern[2]].innerText;
  
      if (p1 != "" && p2 != "" && p3 != "") {
        if (p1 === p2 && p2 === p3) {
          showWinner(p1);
          return 1;
        }
      }
    }
  };
  
  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);