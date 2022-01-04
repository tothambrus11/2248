var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
var A = /** @class */ (function () {
    function A(x, y) {
        this.x = x;
        this.y = y;
    }
    A.prototype.len = function () {
        return Math.pow((Math.pow(this.x, 2) + Math.pow(this.y, 2)), 0.5);
    };
    return A;
}());
var o;
function sum(tomb) {
    var result = 0;
    tomb.forEach(function (value) {
        result += value;
    });
    return result;
}
var sqr = function (x) { return Math.pow(x, 2); };
console.log(sqr(100));
console.log(sum([2, 6, 3]));
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());
var s = '{    "id": 10,    "title": "hello",    "content": "world"}';
var post = JSON.parse(s);
console.log(post);
var cont = document.getElementById("game-cont");
var canvasEl = document.getElementById("canvas");
var ctx = canvasEl.getContext("2d");
var rows = 8;
var cols = 5;
var gapSize = 0.05;
var blockSize = (1 - gapSize) / cols - gapSize;
var aspectRatio = (gapSize * (cols + 1) + blockSize * cols) / (gapSize * (rows + 1) + blockSize * rows);
var blocks = [];
var Block = /** @class */ (function () {
    function Block(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.element = document.createElement("div");
        this.element.classList.add("block");
        this.setPos(x, y);
        this.setValue(4);
    }
    Object.defineProperty(Block.prototype, "x", {
        set: function (newX) {
            this.x_ = newX;
            this.element.style.setProperty("--xpos", "" + newX);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "y", {
        set: function (newY) {
            this.y_ = newY;
            this.element.style.setProperty("--ypos", "" + newY);
        },
        enumerable: false,
        configurable: true
    });
    Block.prototype.setPos = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Block.prototype.setValue = function (value) {
        this.element.innerText = value;
    };
    return Block;
}());
function initBlocks() {
    for (var i = 0; i < rows; i++) {
        blocks.push([]);
        for (var j = 0; j < cols; j++) {
            var block = new Block(j, i);
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
var width, height;
document.body.addEventListener("click", function () {
    blocks.forEach(function (row) {
        row.forEach(function (b) {
            b.setPos(3, 3);
        });
    });
});
function onResize() {
    width = cont.offsetWidth;
    height = cont.offsetHeight;
    canvasEl.setAttribute("width", width + "");
    canvasEl.setAttribute("height", height + "");
}
window.addEventListener("resize", onResize);
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
    line(width * (gapSize + blockSize / 2 + (gapSize + blockSize) * 3), width * (gapSize + blockSize / 2 + (gapSize + blockSize) * 2), width * (gapSize + blockSize / 2 + (gapSize + blockSize) * 3), width * (gapSize + blockSize / 2 + (gapSize + blockSize) * 4));
    ctx.stroke();
    window.requestAnimationFrame(draw);
}
onResize();
draw();
//# sourceMappingURL=bundle.js.map