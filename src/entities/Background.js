import GameObject from "../game/GameObject";

class SingleBackground extends GameObject {
    constructor(game, x, y) {
        super(game, 'sky');
        this.setup(x, y)
    }

    setup(x, y) {
        this.scale = {
            x: 2.5,
            y: 2.5
        }
        this.x = x
        this.y = y
    }

    update(dt) {
    }
}

class Background {
    constructor(game) {
        this.speed = 2
        this.bg1 = new SingleBackground(game, 0, 0)
        this.bg2 = new SingleBackground(game, 0, -271 * 2.5)
    }

    setup() {
    }

    update(dt) {
        const speed = 80 * dt
        this.bg2.y += speed
        this.bg1.y += speed

        if (this.bg1.y >= 270 * 2.5) {
            this.bg1.y = -271 * 2.5
        }

        if (this.bg2.y >= 270 * 2.5) {
            this.bg2.y = -271 * 2.5
        }
    }

    draw() {
        this.bg1.draw()
        this.bg2.draw()
    }
}

export {
    SingleBackground,
    Background
};

