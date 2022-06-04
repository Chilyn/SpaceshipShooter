import {log} from "./utils";

class GameObject {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.opacity = 1
        this.rotation = 0
        this.scale = {
            x: 2,
            y: 2
        }
        this.filter = null
        this.alive = true
    }

    static new(game, name) {
        return  new this(game, name)
    }

    kill() {
        this.alive = false
    }

    draw() {
        if (!this.alive) {
            return
        }

        const ctx = this.game.context
        ctx.save()

        if (this.opacity <= 0) {
            this.opacity = 0
        }
        ctx.globalAlpha = this.opacity

        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation * Math.PI / 180)
        ctx.scale(this.scale.x, this.scale.y)
        if (this.filter) {
            ctx.filter = "brightness(60%)"
        }
        ctx.drawImage(this.texture, 0, 0)
        ctx.restore()
    }

    update(dt) {

    }
}

export default GameObject;
