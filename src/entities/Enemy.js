import GameObject from "../game/GameObject";
import {randomBetween} from "../game/utils";
import {Anim} from "../game/Anim";

class Enemy extends GameObject {
    constructor(game) {
        super(game, 'enemy');
        this.setup()
    }
    setup() {
        this.speed = randomBetween(1, 3);
        this.x = randomBetween(0, 230 * 2)
        this.y = -randomBetween(0, 260 * 2)
        this.tileW = 32
        this.tileH = 32
        this.anim = Anim.new(this.game)
        const animConfig = {
            frames: [{ x: 0, y: 0 }, { x: 1, y: 0 }],
            speed: 0.08
        }
        this.anim.setupAnimation(animConfig)
        this.scale = {x: 2, y: 2}
    }

    update(dt) {
        this.y += dt * 100 * this.speed;
        if (this.y >= 272 * 2.5) {
            this.setup()
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
}

export {Enemy};
