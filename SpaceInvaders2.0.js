//SPACE INVADERS 2.0//
/////////////////////////////////////////////////
function loadImg(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = url;
  });
}

const screen = document.createElement("canvas");
const ctx = screen.getContext("2d");

let ScreenW = 500;
let ScreenH = 500;

ctx.fillRect(0, 0, ScreenW, ScreenH);

loadImg("//TilesFolderPath").then(image => {
  ctx.drawImage(image, 0, 0, 0, 0, 0, 0, 0, 0);
});
