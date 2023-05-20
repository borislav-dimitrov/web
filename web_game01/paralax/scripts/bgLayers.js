class ParalaxLayer {
    constructor(image, speedModifier, gameSpeed) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = new Image();
        this.image.src = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    update(gameSpeed) {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }

        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}
