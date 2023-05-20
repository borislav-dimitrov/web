const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 1;

const layer1 = new ParalaxLayer("assets\\layer-1.png", 0.2, gameSpeed);
const layer2 = new ParalaxLayer("assets\\layer-2.png", 0.6, gameSpeed);
const layer3 = new ParalaxLayer("assets\\layer-3.png", 0.8, gameSpeed);
const layer4 = new ParalaxLayer("assets\\layer-4.png", 1.6, gameSpeed);
const layer5 = new ParalaxLayer("assets\\layer-5.png", 2.2, gameSpeed);
const gameObjects = {
    backgroundLayers: [layer1, layer2, layer3, layer4, layer5]
}


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


    gameObjects.backgroundLayers.forEach(obj => {
        obj.update(gameSpeed);
        obj.draw(ctx);
    });

    requestAnimationFrame(animate);
};

animate();
