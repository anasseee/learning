console.log("GAME LOADED//SPACE INVADERS");

////////////////////////////////////////////////

let screen = document.createElement("canvas");
screen.width = 800;
screen.height = 900;
document.body.appendChild(screen);
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
let ctx = screen.getContext("2d");

////////////////////////////////////////////////

let x = screen.width / 2;
let y = screen.height / 2;
let bulletY = screen.height - 20;
let bulletSpeed = 10;
let bulletLifeTime = 3;
let size = 20;
let sWidth = screen.width;
let sHeight = screen.height;
let columns = screen.width / size;
let rows = screen.height / size;
let speed = 5;
let right = false;
let left = false;
let up = false;
let down = false;
let shot = false;
let gravity = 10;
let jumpForce = 40;

/////////////////////////////////////////////////

function keyDown() {
  switch (event.keyCode) {
    case 39:
      right = true;
      break;
    case 37:
      left = true;
      break;
    //case 40: up = true;
    //break;
    //case 38: down = true;
    //break;
    case 32:
      shot = true;
      break;
  }
}

function keyUp() {
  switch (event.keyCode) {
    case 39:
      right = false;
      break;
    case 37:
      left = false;
      break;
    //case 40: up = false;
    //break;
    //case 38: down = false;
    //break;
    case 32:
      shot = false;
      break;
  }
}

function move() {
  if (right == true) {
    x += 1 * speed;
  } else if (left == true) {
    x -= 1 * speed;
  }
  //if(up == true) {
  //y += 1 * speed;
  //} else if(down == true) {
  //y -= 1 * speed;
  //}
}

class player {
  constructor() {
    ctx.fillStyle = "#1CE80D",
    ctx.fillRect(x, y, size, size),
    ctx.fillRect(x + 10, y, size, size),
    ctx.fillRect(x + 20, y, size, size),
    ctx.fillRect(x - 10, y, size, size),
    ctx.fillRect(x - 20, y, size, size),
    ctx.fillRect(x + 5, y - 1, 10, 10),
    ctx.fillRect(x + 5, y - 2, 10, 10),
    ctx.fillRect(x + 5, y - 3, 10, 10),
    ctx.fillRect(x + 5, y - 4, 10, 10),
    ctx.fillRect(x + 5, y - 5, 10, 10),
    ctx.fillRect(x + 5, y - 6, 10, 10),
    ctx.fillRect(x + 5, y - 7, 10, 10),
    ctx.fillRect(x + 9, y - 8, 2, 2),
    ctx.fillRect(x + 9, y - 9, 2, 2),
    ctx.fillRect(x + 9, y - 10, 2, 2),
    ctx.fillStyle = "#001119",
    ctx.fillRect(x + 35, y, 5, 5),
    ctx.fillRect(x - 20, y, 5, 5);
  }
}

class enemy1 {
  constructor() {
  ctx.fillStyle = "#1CE80D";
  ctx.fillRect(444, 375, 5, 5);
  ctx.fillRect(411, 375, 5, 5);
  ctx.fillRect(416, 380, 5, 5);
  ctx.fillRect(439, 380, 5, 5);
  ctx.fillRect(410, 385, 40, 5);
  ctx.fillRect(405, 390, 50, 5);
  ctx.fillRect(400, 395, 60, 5);
  ctx.fillRect(400, 400, 60, 5);
  ctx.fillRect(400, 405, 5, 5);
  ctx.fillRect(455, 405, 5, 5);
  ctx.fillRect(410, 405, 40, 5);
  ctx.fillStyle = "#001119";
  ctx.fillRect(415, 405, 30, 5);
  ctx.fillStyle = "#1CE80D";
  ctx.fillRect(415, 410, 30, 5);
  ctx.fillStyle = "#001119";
  ctx.fillRect(440, 390, 5, 5);
  ctx.fillRect(414, 390, 5, 5);
  ctx.fillRect(428, 410, 4, 5);
  }
}

function drawBackground() {
  ctx.fillStyle = "#001119";
  let background = ctx.fillRect(0, 0, sWidth, sHeight);
}

function gravityForce() {
  y += gravity;
}

function jumpAct() {
  if (jump == true) {
    y -= jumpForce;
  } else if (jump == false) {
    gravityForce();
  }
}

function bulletDraw() {
  let bulletX = x;
  ctx.fillStyle = "#1CE80D";
  ctx.fillRect(bulletX + 9, bulletY, 1, 8);
}

function bulletPos() {
  bulletY -= bulletSpeed;
}

function attack() {
  if (shot == true) {
    for (let i = screen.height; i > 0; i--) {
      bulletDraw();
      bulletPos();
    }
    console.log("shooting");
  } else if (shot == false) {
    bulletY = 880;
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, screen.width, screen.height);
  drawBackground();
  new player(x, y);
  new enemy1(x, y);
  move();
  gravityForce();
  attack();
  bulletPos();
  requestAnimationFrame(gameLoop);
  if (x > screen.width - size - 30) {
    x = 30;
  } else if (x < 30) {
    x = screen.width - 50;
  }
  if (y > screen.height - size - 10) {
    y -= size - 10;
  } else if (y < 0) {
    y += size;
  }
}
////////////////////////////////////////////////

requestAnimationFrame(gameLoop);
