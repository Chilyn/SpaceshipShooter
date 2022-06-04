import Scene from "../game/Scene";
import {Background} from "../entities/Background";
import {Ship} from "../entities/Ship";
import {Enemy} from "../entities/Enemy";
import {ParticlePool} from "../particle/ParticleSystem";
import {collide} from "../game/utils";

class SceneMain extends Scene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.game.showTips('按 W S A D 控制上下左右，按 J 发射子弹')
        this.bg = new Background(this.game)
        this.addElements(this.bg)

        this.ship = new Ship(this.game, 300, 471)
        this.addElements(this.ship)

        this.enemyCount = 0
        this.maxEnemyCount = 5
        this.addEnemies()

        this.particlePool = new ParticlePool(this.game)
        this.addElements(this.particlePool)
    }

    addEnemies() {
        if (this.enemyCount >= this.maxEnemyCount) {
            return
        }

        for (let i = this.enemyCount; i < this.maxEnemyCount; i++) {
            let enemy = Enemy.new(this.game)
            this.addElements(enemy)
            this.enemyCount++
        }
    }

    setupInputs() {
        const g = this.game
        const s = this
        g.registerAction('a', () => {
            s.ship.moveLeft()
        })
        g.registerAction('d', () => {
            s.ship.moveRight()
        })
        g.registerAction('w', () => {
            s.ship.moveUp()
        })
        g.registerAction('s', () => {
            s.ship.moveDown()
        })
        g.registerAction('j', () => {
            s.ship.fire()
        })
        g.registerAction('r', () => {
            this.game.replaceScene(SceneMain.new(this.game))
        })
    }

    update(dt) {
        super.update(dt)
        this.addEnemies()
        this.checkCollide()
    }

    draw() {
        super.draw();
    }

    checkCollide() {
        for (let i = 0; i < this.elements.length; i++) {
            let other = this.elements[i]
            for (let j = 0; j < this.elements.length; j++) {
                let e = this.elements[j]
                const commands = [
                    {
                        o1: other,
                        o2: e,
                        o1Type: 'Enemy',
                        o2Type: 'Bullet',
                        action: (o1, o2) => {
                            this._killActions(o1, o2)
                            this._createParticleAction(o1)
                        },
                    },
                    {
                        o1: other,
                        o2: e,
                        o1Type: 'Enemy',
                        o2Type: 'Ship',
                        action: (o1, o2) => {
                            this._killActions(o1, o2)
                            this._createParticleAction(o2)
                            this.endGame()
                        },
                    }
                ]

                for (let k = 0; k < commands.length; k++) {
                    this.handleHit(commands[k])
                }
            }
        }
    }

    _killActions(o1, o2) {
        o1.kill()
        o2.kill()
        this.removeElements(o1)
        this.removeElements(o2)
        this.enemyCount--
    }

    _createParticleAction(o1) {
        this.particlePool.create(o1.x, o1.y, 10)
    }

    handleHit(command) {
        const {
            o1,
            o2,
            o1Type,
            o2Type,
            action
        } = command
        if (o1.constructor.name === o1Type && o2.constructor.name === o2Type) {
            if (collide(o1, o2)) {
                action(o1, o2)
            }
        }
    }

    endGame() {
        this.game.showTips('按 R 重新开始游戏')
        this.game.registerAction('r', () => {
            this.game.replaceScene(SceneMain.new(this.game))
            this.game.registerAction('r', null)
        })
    }
}

export default SceneMain