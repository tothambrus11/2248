let cont = document.getElementById("game-cont");
let canvasEl = document.getElementById("canvas") as HTMLCanvasElement;
let ctx = canvasEl.getContext("2d");

const rows = 8;
const cols = 5;

const gapSize = 0.05;
const blockSize = (1 - gapSize) / cols - gapSize;
const aspectRatio = (gapSize * (cols + 1) + blockSize * cols) / (gapSize * (rows + 1) + blockSize * rows);

let blocks = [];

class Block {
    element: HTMLDivElement;
    private x_: number;
    private y_: number;

    constructor(x = 0, y = 0) {
        this.element = document.createElement("div");
        this.element.classList.add("block");
        this.setPos(x, y);
        this.setValue(4);
    }

    set x(newX: number) {
        this.x_ = newX;
        this.element.style.setProperty("--xpos", "" + newX);
    }

    set y(newY: number) {
        this.y_ = newY;
        this.element.style.setProperty("--ypos", "" + newY);
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    setValue(value) {
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

function getCoords(xpos, ypos) {
    return {
        x: Math.round(100 * (gapSize + xpos * (blockSize + gapSize) + blockSize / 2)),
        y: Math.round(100 * (gapSize + ypos * (blockSize + gapSize) + blockSize / 2)),
    };
}

let width: number, height: number;

document.body.addEventListener("click", () => {
    blocks.forEach(row => {
        row.forEach(b => {
            b.setPos(3, 3);
        })
    })
})

function onResize() {
    width = cont.offsetWidth;
    height = cont.offsetHeight;


    canvasEl.setAttribute("width", width + "");
    canvasEl.setAttribute("height", height + "");
}

window.addEventListener("resize", onResize)

function line(x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
}

function draw() {
    ctx.fillStyle = "#0f0f0f";
    ctx.lineWidth = 0;
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 4;

    ctx.strokeStyle = "#ffffff";
    line(width * (gapSize + blockSize/2 + (gapSize + blockSize) * 3), width * (gapSize +blockSize/2 + (gapSize + blockSize) * 2),
        width * (gapSize + blockSize/2 +(gapSize + blockSize) * 3), width * (gapSize + blockSize/2 +(gapSize + blockSize) * 4))

    ctx.stroke();
    window.requestAnimationFrame(draw);
}

onResize();
draw();
