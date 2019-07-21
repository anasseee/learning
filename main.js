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
let bulletY = screen.height - 24;
let bulletSpeed = 15;
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
let playerHeight = 24;

/////////////////////////////////////////////////

function keyDown() {
  switch (event.keyCode) {
    case 39:
      right = true;
      reDrawPlayer();
      break;
    case 37:
      left = true;
      reDrawPlayer();
      break;
    //case 40: up = true;
    //break;
    //case 38: down = true;
    //break;
    case 32:
      shot = true;
      //gameLoop();
      attack();
      break;
  }
}

function reDrawPlayer() {
  ctx.fillStyle = "#001119";
  let pHeight = playerHeight + 20;
  let wallWidth = 10;
  let background = ctx.fillRect(
    wallWidth,
    screen.height - pHeight,
    screen.width - wallWidth * 2,
    pHeight - 10
  );
  move();
  player();
}

function keyUp() {
  switch (event.keyCode) {
    case 39:
      right = false;
      //gameLoop();
      break;
    case 37:
      left = false;
      //gameLoop();
      break;
    //case 40: up = false;
    //break;
    //case 38: down = false;
    //break;
    case 32:
      shot = false;
      //gameLoop();
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

function player() {
  ctx.fillStyle = "#1CE80D";
  ctx.fillRect(x, y, size, size);
  ctx.fillRect(x + 10, y, size, size);
  ctx.fillRect(x + 20, y, size, size);
  ctx.fillRect(x - 10, y, size, size);
  ctx.fillRect(x - 20, y, size, size);
  ctx.fillRect(x + 5, y - 1, 10, 10);
  ctx.fillRect(x + 5, y - 2, 10, 10);
  ctx.fillRect(x + 5, y - 3, 10, 10);
  ctx.fillRect(x + 5, y - 4, 10, 10);
  ctx.fillRect(x + 5, y - 5, 10, 10);
  ctx.fillRect(x + 5, y - 6, 10, 10);
  ctx.fillRect(x + 5, y - 7, 10, 10);
  ctx.fillRect(x + 9, y - 8, 2, 2);
  ctx.fillRect(x + 9, y - 9, 2, 2);
  ctx.fillRect(x + 9, y - 10, 2, 2);
  ctx.fillStyle = "black";
  ctx.fillRect(x + 35, y, 5, 5);
  ctx.fillRect(x - 20, y, 5, 5);
}

function enemy1() {
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

function draw() {
  ctx.fillStyle = "#001119";
  let background = ctx.fillRect(0, 0, sWidth, sHeight);
  player();

  ctx.fillStyle = "#EAEEB7";
  //let wall1 = ctx.fillRect(0, 0, 10, sHeight);
  //let wall2 = ctx.fillRect(0, 0, sHeight, 10);
  //let wall3 = ctx.fillRect(0, sHeight - 10, sWidth, 10);
  //let wall4 = ctx.fillRect(sWidth - 10, 0, 10, sHeight);
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

function bulletDraw(pos) {
  let bulletX = pos.x;
  //ctx.clearRect(bulletX + 5, bulletY-8, 20, 20);
  ctx.fillStyle = "#001119";
  let background = ctx.fillRect(bulletX + 8, pos.y + 8, 4, 10);
  ctx.fillStyle = "#1CE80D";
  ctx.fillRect(bulletX + 9, pos.y, 3, 8);
  if (pos.y <= 10) {
    ctx.fillStyle = "#001119";
    ctx.fillRect(bulletX + 9, pos.y, 3, 8);
  }
}

function bulletPos() {
  bulletY -= bulletSpeed;
}

var hitTarget = function(currentPos) {
  if (currentPos.y <= 0) {
    return;
  }

  bulletDraw(currentPos);
  currentPos.y--;
  setInterval(function() {
    hitTarget(currentPos);
  }, 1000 / 60);
};

function attack() {
  if (shot == true) {
    topPos = screen.height;
    let htg = new hitTarget({ x: x, y: bulletY - playerHeight });
    /* for(let i = screen.height; i > 0; i--) {
     bulletDraw();
     bulletPos();
     }*/
  } else if (shot == false) {
    bulletY = 880;
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, screen.width, screen.height);
  draw();
  move();
  gravityForce();
  attack();
  enemy1();
  bulletPos();

  if (x > screen.width - size - 30) {
    x = 30;
  } else if (x < 30) {
    x = screen.width - 50;
  }
  if (y !== 880) {
    requestAnimationFrame(gameLoop);
  }

  if (y > screen.height - size - 10) {
    y -= size - 10;
  } else if (y < 0) {
    y += size;
  }
}
////////////////////////////////////////////////
//gameLoop();
requestAnimationFrame(gameLoop);
