import GameObject from "../game/GameObject";
import {Anim} from "../game/Anim";
import {Bullet} from "./Bullet";

class Ship extends GameObject {
    constructor(game, x, y) {
        super(game, 'ship');
        this.setup(x, y)
    }

    setup(x, y) {
        this.x = x
        this.y = y
        this.tileW = 16
        this.tileH = 24
        this.speed = 10;
        this.cooldown = 0
        this.anim = Anim.new(this.game)
        const animConfig = {
            frames: [{ x: 2, y: 0 }, { x: 2, y: 1 }],
            speed: 0.08
        }
        this.anim.setupAnimation(animConfig)
        this.scale = {x: 2.5, y: 2.5}
        this.leftEdge = 0
        this.rightEdge = this.game.canvas.width - this.tileW * 2
        this.topEdge = 0
        this.bottomEdge = this.game.canvas.height - this.tileH * 2
    }

    update(dt) {
        if (this.cooldown > 0) {
            this.cooldown--
        }
        this.anim.update(dt)
    }

    draw() {
        if (!this.alive) {
            return
        }

        const ctx = this.game.context
        const img = this.texture
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.scale(this.scale.x, this.scale.y)
        ctx.drawImage(
            img,
            this.anim.frame.x * this.tileW,
            this.anim.frame.y * this.tileH,
            this.tileW,
            this.tileH,
            0,
            0,
            this.tileW,
            this.tileH
        );
        ctx.restore()
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 10
            let x = this.x + this.tileW
            let y = this.y
            let b = new Bullet(this.game, x, y)
            this.scene.addElements(b)
        }
    }

    moveX(x) {
        if (x < this.leftEdge) {
            x = this.leftEdge
        } else if (x > this.rightEdge) {
            x = this.rightEdge
        }

        this.x = x
    }

    moveY(y) {
        if (y < this.topEdge) {
            y = this.topEdge
        } else if (y > this.bottomEdge) {
            y = this.bottomEdge
        }

        this.y = y
    }

    moveLeft() {
        this.moveX(this.x - this.speed)
    }

    moveRight() {
        this.moveX(this.x + this.speed)
    }

    moveUp() {
        this.moveY(this.y - this.speed)
    }

    moveDown() {
        this.moveY(this.y + this.speed)
    }
}

export {Ship};
