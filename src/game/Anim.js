class Anim {
    constructor(game) {
        this.game = game
        this.frames = [
            {x: 2, y: 0},
            {x: 2, y: 1},
        ]
        this.frame = this.frames[0]
        this.frameIndex = 0
        this.curTime = 0
        this.speed = 0.08
    }

    static new(game) {
        return new this(game)
    }

    setupAnimation(config) {
        this.frames = config.frames
        this.speed = config.speed
        this.curTime = 0
    }

    update(dt) {
        this.curTime += dt
        if (this.curTime > this.speed) {
            this.curTime -= this.speed
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.frame = this.frames[this.frameIndex]
        }
    }
}

export {Anim};
