const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "assets\\shadow_dog.png";
const spriteWidth = 575;
const spriteHight = 525;
let animation = ANIMATIONS.idle;
let frameX = 0;
let frameY = animation.yFrame;

let gameFrame = 0;
const staggerFrames = 9;


function changeAnimation(new_animation) {
    animation = new_animation;
    frameX = 0;
    frameY = animation.yFrame;
};

function updateAnimation() {
    if (gameFrame % staggerFrames == 0) {
        // Change animation sprite [frameX]
        if (frameX < animation.xFrames) frameX++;
        else frameX = 0;
    }
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHight,
        spriteWidth, spriteHight, 0, 0, spriteWidth, spriteHight)

    updateAnimation();
    gameFrame++;
    requestAnimationFrame(animate);
};

changeAnimation(ANIMATIONS.dizzy);
animate();
