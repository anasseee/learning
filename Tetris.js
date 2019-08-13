//////////////////////*TETRIS v0.0.1*///////////////////////
/*Tetris was my first approach with the videogames world,
  and now I'm learning to being a game developer. I like
  Javascript and then I decide to make something nice with
  it, like this game. I think is a good way for learning 
  the mechanics of a good game.*/

let screen = document.createElement("canvas");
let ctx = screen.getContext("2d");
document.body.appendChild(screen);
screen.width = 200;
screen.height = 400;
ctx.scale(10,10);

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

let LEFT = false;
let RIGHT = false;
let CHANGE = false;
let counter = 0;
let interval = 1000;
let lastTime = 0;

const Matrix = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

//////////////////////////*Tetrominoes*//////////////////////////

let T = [[0,1,1,1],
         [0,0,1,0],
         [0,0,0,0],
         [0,0,0,0]];
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

let O = [[0,1,1,0],
         [0,1,1,0],
         [0,0,0,0],
         [0,0,0,0]];
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

let I = [[0,0,1,0],
         [0,0,1,0],
         [0,0,1,0],
         [0,0,1,0]];
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

let S = [[0,0,1,1],
         [0,1,1,0],
         [0,0,0,0],
         [0,0,0,0]];
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

let Z = [[0,1,1,0],
         [0,0,1,1],
         [0,0,0,0],
         [0,0,0,0]];
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

let L = [[0,1,0,0],
         [0,1,0,0],
         [0,1,1,0],
         [0,0,0,0]];
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

let J = [[0,0,1,0],
         [0,0,1,0],
         [0,1,1,0],
         [0,0,0,0]];
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
let player = {pos: {x: 0, y: 0}, tetromino: J}

function playerDrop(){
    player.pos.y = player.pos.y + 1;
    counter = 0;
}

function movement(){
    if(LEFT == true){
        player.pos.x = player.pos.x - 1;
    } else if(RIGHT == true){
        player.pos.x = player.pos.x + 1;
    } else if(DOWN = true){
        playerDrop();
    }
}

function spawn(){}
function collision(){
    if(player.pos.x > screen.width){
        player.pos.x - 1;
    } else if(player.pos.x < screen.width){
        player.pos.x + 1;
    }
}
function clearRow(){}

//GAME LOOP

function gameLoop(time = 0){
    ctx.clearRect(0,0,screen.width,screen.height);
    //FALLING TETROMINO
    const deltaTime = time - lastTime;
    lastTime = time;

    counter += deltaTime;
    if(counter > interval){
        playerDrop();
        counter = 0;
    }
    matrix();
    movement();
    collision();
    console.log(player.pos.x);
    t(player.tetromino, player.pos);
    requestAnimationFrame(gameLoop);
}

gameLoop();

