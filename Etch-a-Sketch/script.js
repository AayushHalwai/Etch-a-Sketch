let currentMode = "black";
let currentSize = 16;

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r},${g},${b})`;       
}

function createBoard(size){
    let container = document.querySelector(".sketch-container");
    container.innerHTML = '';
    
    currentSize = size; 
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        
        cell.addEventListener("mouseenter", function (){
            if(currentMode === "black"){
                this.style.backgroundColor = "black";
            } else if(currentMode === "random"){
                this.style.backgroundColor = getRandomColor();
            }
        });
        container.appendChild(cell);
    }
}

document.addEventListener("DOMContentLoaded", function (){
    createBoard(16);
    
    const popupBtn = document.getElementById("popup");
    const blackBtn = document.querySelector(".btn-dark");
    const randomBtn = document.querySelector(".btn-success");
    const resetBtn = document.querySelector(".btn-danger");
    
    popupBtn.addEventListener("click", function (){
        let size = prompt("enter grid size (max 100)");
        size = parseInt(size);

        if (size && size > 0 && size <= 100){
            createBoard(size);
        } else {
            alert("please enter the number between 1 and 100");
        }
    });

    blackBtn.addEventListener("click", function(){
        currentMode = "black";
    });

    randomBtn.addEventListener("click", function(){
        currentMode = "random";
    });

    resetBtn.addEventListener("click", function(){
        createBoard(currentSize); 
    });
});