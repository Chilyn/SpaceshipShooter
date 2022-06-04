import GameObject from "../game/GameObject";
import {randomBetween} from "../game/utils";

class Bullet extends GameObject {
    constructor(game, x, y) {
        super(game, 'bullet');
        this.setup(x, y)
    }
    setup(x, y) {
        this.speed = randomBetween(1, 3)
        this.x = x
        this.y = y
        this.scale = {x: 2, y: 2}
    }
    update(dt) {
        this.y -= dt * 400
    }
}

export {Bullet};
