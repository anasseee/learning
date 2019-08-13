//////////////////////*TETRIS v0.0.1*///////////////////////
/*Tetris was my first approach with the videogames world,
  and now I'm learning to being a game developer. I like
  Javascript and then I decide to make something nice with
  it, like this game. I think is a good way for learning 
  the mechanics of a good game.*/

let screen = document.createElement("canvas");
let ctx = screen.getContext("2d");
document.body.appendChild(screen);
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
screen.width = 500;
screen.height = 800;
ctx.scale(10,10);

function keyDown(){}
function keyUp(){}

const Matrix = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

//GAME LOOP

function gameLoop(){
    ctx.clearRect(0,0,screen.width,screen.height);
    matrix();
    t(T,{x: 1, y: 6});
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

