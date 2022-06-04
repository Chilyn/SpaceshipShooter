import Scene from "../game/Scene";
import {SingleBackground} from "../entities/Background";
import {Ship} from "../entities/Ship";
import SceneMain from "./SceneMain";

class SceneStart extends Scene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.game.showTips('按 K 开始游戏')
        this.bg = new SingleBackground(this.game, 0, 0)
        this.addElements(this.bg)

        this.ship = new Ship(this.game, 300, 471)
        this.addElements(this.ship)
    }

    setupInputs() {
        const g = this.game
        g.registerAction('k', () => {
            g.replaceScene(SceneMain.new(g), 'playing')
            this.game.registerAction('k', null)
        })
    }

    update(dt) {
        super.update(dt)
    }
}

export default SceneStart