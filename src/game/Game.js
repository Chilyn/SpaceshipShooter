import {log} from "./utils";

const STEP = 1 / 60
const MAX_FRAME = STEP * 5

class Game {
    constructor(images, runCallback) {
        this.images = images
        this.runCallback = runCallback

        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.createElement("canvas")
        this.canvas.width = 256 * 2.5
        this.canvas.height = 272 * 2.5
        this.context = this.canvas.getContext('2d')
        this.context.imageSmoothingEnabled = false
        document.querySelector('#box').appendChild(this.canvas)
        // events
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', event => {
            this.keydowns[event.key] = false
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    showTips(msg) {
        document.querySelector('#tips').innerHTML = msg
    }

    update(dt) {
        this.scene.update(dt)
    }

    draw() {
        this.scene.draw()
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    textureByName(name) {
        const g = this
        const img = g.images[name]
        return img
    }

    runWithScene(scene) {
        const g = this
        g.scene = scene
        let dt = 0
        let last = 0
        const loop = ms => {
            requestAnimationFrame(loop)

            const t = ms / 1000
            dt = Math.min(t - last, MAX_FRAME)
            last = t

            // events
            const actions = Object.keys(g.actions)
            for (let i = 0; i < actions.length; i++) {
                let key = actions[i]
                if(g.keydowns[key]) {
                    g.actions[key] && g.actions[key]()
                }
            }

            g.update(dt)
            // clear
            g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
            g.draw()
        }

        requestAnimationFrame(loop)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __start(scene) {
        this.runCallback(this)
    }

    init() {
        const g = this
        const loads = []
        const names = Object.keys(g.images)
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                g.images[name] = img
                loads.push(1)
                if (loads.length === names.length) {
                    g.__start()
                }
            }
        }
    }
}

export default Game;
