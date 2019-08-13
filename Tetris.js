//////////////////////*TETRIS v0.0.1*///////////////////////
/*Tetris was my first approach with the videogames world,
  and now I'm learning to being a game developer. I like
  Javascript and then I've decided to make something nice with
  it, like this game. I think make the Tetris game is a good 
  way for learning the mechanics of a good design.*/

let screen = document.createElement("canvas");
let ctx = screen.getContext("2d");
document.body.appendChild(screen);
screen.width = 100;
screen.height = 160;
ctx.scale(10,10);

let LEFT = false;
let RIGHT = false;
let DOWN = false;
let CHANGE = false;
let counter = 0;
let interval = 1000;
let lastTime = 0;

document.addEventListener("keydown", event => {
    switch(event.keyCode){
        case 37: LEFT = true;
            break;
        case 39: RIGHT = true;
            break;
        case 40: DOWN = true;
            break;
        case 32: CHANGE = true;
            break;
    }
}, false);

document.addEventListener("keyup", event => {
    switch(event.keyCode){
        case 37: LEFT = false;
            break;
        case 39: RIGHT = false;
            break;
        case 40: DOWN = false;
            break;
        case 32: CHANGE = false;
            break;
    }
}, false);

const Matrix = [[0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]];

//////////////////////////*Tetrominoes*//////////////////////////

let T = [[1,1,1],
         [0,1,0]];
function t(T,offset){
         T.forEach((row,y) => {
            row.forEach((value, x) => {
                if(value !== 0) {
                    ctx.fillStyle = "red";
                    ctx.fillRect(x+offset.x,y+offset.y,1,1);
                }
            });
        });
    }

let O = [[1,1],
         [1,1]];
function o(O,offset){
            O.forEach((row,y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        ctx.fillStyle = "blue";
                        ctx.fillRect(x+offset.x,y+offset.y,1,1);
                    }
                });
            });
        }

let I = [[1],
         [1],
         [1],
         [1]];
function i(I,offset){
            I.forEach((row,y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        ctx.fillStyle = "yellow";
                    ctx.fillRect(x+offset.x,y+offset.y,1,1);
                    }
                });
            });
        }

let S = [[0,1,1],
         [1,1,0]];
function s(S,offset){
            S.forEach((row,y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        ctx.fillStyle = "purple";
                        ctx.fillRect(x+offset.x,y+offset.y,1,1);
                    }
                });
            });
        }

let Z = [[1,1,0],
         [0,1,1]];
function z(Z,offset){
         Z.forEach((row,y) => {
            row.forEach((value, x) => {
                if(value !== 0) {
                    ctx.fillStyle = "grey";
                    ctx.fillRect(x+offset.x,y+offset.y,1,1);
                }
            });
        });
    }

let L = [[1,0],
         [1,0],
         [1,1]];
function l(L,offset){
         L.forEach((row,y) => {
            row.forEach((value, x) => {
                if(value !== 0) {
                    ctx.fillStyle = "green";
                    ctx.fillRect(x+offset.x,y+offset.y,1,1);
                }
            });
        });
    }

let J = [[0,1],
         [0,1],
         [1,1]];
function j(J,offset){
         J.forEach((row,y) => {
            row.forEach((value, x) => {
                if(value !== 0) {
                    ctx.fillStyle = "white";
                    ctx.fillRect(x+offset.x,y+offset.y,1,1);
                }
            });
        });
    }

function matrix(){
    Matrix.forEach((row,y) => {
        row.forEach((value, x) => {
            if(value == 0) {
                ctx.fillStyle = "#000000";
                ctx.fillRect(x,y,1,1);
            }
        });
    });
}

//LOGIC

function movement(){
    if(LEFT){
        player.pos.x = player.pos.x - 1;
    } else if(RIGHT){
        player.pos.x = player.pos.x + 1;
    } 
    if(DOWN){
        player.pos.y++;
        counter = 0;
    }
   
}

function spawn(){}

function collision(){
    if(player.pos.x >= 9){
        player.pos.x = player.pos.x - 1;
    } else if(player.pos.x <= -1){
        player.pos.x = player.pos.x + 1;
    }
    if(player.pos.y >= 14){
        player.pos.y = player.pos.y - 1;
    }
}

function clearRow(){}

//GAME LOOP

const player = {pos: {x: 0, y: 0}, tetromino: J}

function gameLoop(time = 0){
    ctx.clearRect(0,0,screen.width,screen.height);
    //FALLING TETROMINO
    const deltaTime = time - lastTime;
    lastTime = time;

    counter += deltaTime;
    if(counter > interval){
        player.pos.y++;
        counter = 0;
    }
    matrix();
    movement();
    collision();
    t(player.tetromino, player.pos);
    requestAnimationFrame(gameLoop);
}

gameLoop();

