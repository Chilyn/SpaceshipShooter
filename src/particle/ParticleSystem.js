import GameObject from "../game/GameObject";
import {randomBetween} from "../game/utils";

class Particle extends GameObject {
    constructor(game) {
        super(game, 'fire');
        this.setup()
    }

    setup() {
        this.life = 0;
        this.scale = {x: 2, y: 2}
    }

    init(x, y, vx, vy, life) {
        this.life = life
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.scale = {x: 2, y: 2}
    }

    isActive() {
        return this.life > 0
    }

    update(dt) {
        if (!this.isActive()) {
            return false
        }

        this.life--
        this.x += this.vx
        this.y += this.vy
        let factor = randomBetween(-0.03, -0.05)
        this.vx += factor * this.vx
        this.vy += factor * this.vy

        return this.life <= 0
    }
}

class ParticlePool {
    constructor(game) {
        this.pool = []
        this.poolSize = 1000
        for (let i = 0; i < this.poolSize; i++) {
            this.pool.push(Particle.new(game))
        }
        this.firstAvailable_ = this.pool[0]
        for (let i = 0; i < this.poolSize - 1; i++)
        {
            this.pool[i].next = this.pool[i + 1]
        }

        this.pool[this.poolSize - 1].next = null
    }

    update(dt) {
        for (let i = 0; i < this.pool.length; i++) {
            let p = this.pool[i]

            if (p.update(dt)) {
                this.pool[i].next = this.firstAvailable_
                this.firstAvailable_ = this.pool[i]
            }
        }
    }

    draw() {
        for (let i = 0; i < this.pool.length; i++) {
            let p = this.pool[i]
            if (p.isActive()) {
                p.draw()
            }
        }
    }

    create(x, y, count) {
        if (this.firstAvailable_ === null) {
            console.log('没有可用的粒子')
            return
        }

        for(let i = 0; i < count; i++) {
            let p = this.firstAvailable_
            this.firstAvailable_ = p.next;

            if (this.firstAvailable_ === null) {
                break
            }
            let vx = randomBetween(-10, 10)
            let vy = randomBetween(-10, 7)
            let lifetime = randomBetween(100, 120);
            p.init(x, y, vx, vy, lifetime);
        }
    }
}

export {ParticlePool}