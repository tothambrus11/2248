let cont = document.getElementById("game-cont");

let width, height;

const rows = 8;
const cols = 5;

let blocks = [];

class Block {
    constructor(x = 0, y = 0) {
        this.element = document.createElement("div");
        this.element.classList.add("block");
        this.setPos(x, y);
        this.setValue(4);
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
        this.element.style.setProperty("--xpos", x);
        this.element.style.setProperty("--ypos", y);
    }

    setValue(value){
        this.element.innerText = value;
    }
}

function initBlocks() {
    for (let i = 0; i < rows; i++) {
        blocks.push([]);
        for (let j = 0; j < cols; j++) {
            let block = new Block(j, i)
            blocks[i].push(block);
            cont.append(block.element);
        }
    }
}

initBlocks();

document.body.addEventListener("click", () => {
    blocks.forEach(row => {
        row.forEach(b => {
            b.setPos(3, 3);
        })
    })
})
