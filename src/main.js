import Game from './game/Game'
import SceneMain from "./scene/SceneMain";
import SceneStart from "./scene/SceneStart";

const __main = () => {
    const images = {
        bullet: 'res/images/bullet.png',
        sky: 'res/images/sky.png',
        ship: 'res/images/ship.png',
        enemy: 'res/images/enemy-big.png',
        fxSmoke0: 'res/images/fxSmoke0.png',
        fire: 'res/images/fire.png',
    }
    const game = Game.instance(images, (g) => {
        const s = SceneStart.new(g)
        g.runWithScene(s)
    })
}

__main()