
const rows = 4;
const cols = 5;

const symbols = ["🀄","🀅","🀆","🀇","🀈","🀉","🀊"];

let gridData = [];

function randomSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function createGrid(){

    gridData = [];

    for(let r=0; r<rows; r++){

        let row = [];

        for(let c=0; c<cols; c++){
            row.push(randomSymbol());
        }

        gridData.push(row);
    }

    renderGrid();
}

function renderGrid(){

    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    gridData.forEach(row=>{
        row.forEach(symbol=>{
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.innerText = symbol;
            grid.appendChild(tile);
        });
    });
}
