import {log} from "./utils";

class Scene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    static new(game) {
        return new this(game)
    }

    addElements(texture) {
        texture.scene = this
        this.elements.push(texture)
    }

    removeElements(texture) {
        this.elements = this.elements.filter(c => c !== texture)
    }

    draw() {
        const elements = this.elements;
        for (let i = 0; i < elements.length; i++) {
            let e = elements[i]
            e.draw()
        }
    }

    update(dt) {
        const elements = this.elements;
        for (let i = 0; i < elements.length; i++) {
            let e = elements[i]
            e.update(dt)
        }
    }
}

export default Scene