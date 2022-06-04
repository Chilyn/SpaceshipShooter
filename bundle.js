(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Background = exports.SingleBackground = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject2 = require("../game/GameObject");

var _GameObject3 = _interopRequireDefault(_GameObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleBackground = function (_GameObject) {
    _inherits(SingleBackground, _GameObject);

    function SingleBackground(game, x, y) {
        _classCallCheck(this, SingleBackground);

        var _this = _possibleConstructorReturn(this, (SingleBackground.__proto__ || Object.getPrototypeOf(SingleBackground)).call(this, game, 'sky'));

        _this.setup(x, y);
        return _this;
    }

    _createClass(SingleBackground, [{
        key: "setup",
        value: function setup(x, y) {
            this.scale = {
                x: 2.5,
                y: 2.5
            };
            this.x = x;
            this.y = y;
        }
    }, {
        key: "update",
        value: function update(dt) {}
    }]);

    return SingleBackground;
}(_GameObject3.default);

var Background = function () {
    function Background(game) {
        _classCallCheck(this, Background);

        this.speed = 2;
        this.bg1 = new SingleBackground(game, 0, 0);
        this.bg2 = new SingleBackground(game, 0, -271 * 2.5);
    }

    _createClass(Background, [{
        key: "setup",
        value: function setup() {}
    }, {
        key: "update",
        value: function update(dt) {
            var speed = 80 * dt;
            this.bg2.y += speed;
            this.bg1.y += speed;

            if (this.bg1.y >= 270 * 2.5) {
                this.bg1.y = -271 * 2.5;
            }

            if (this.bg2.y >= 270 * 2.5) {
                this.bg2.y = -271 * 2.5;
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            this.bg1.draw();
            this.bg2.draw();
        }
    }]);

    return Background;
}();

exports.SingleBackground = SingleBackground;
exports.Background = Background;

},{"../game/GameObject":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bullet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject2 = require("../game/GameObject");

var _GameObject3 = _interopRequireDefault(_GameObject2);

var _utils = require("../game/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = function (_GameObject) {
    _inherits(Bullet, _GameObject);

    function Bullet(game, x, y) {
        _classCallCheck(this, Bullet);

        var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, game, 'bullet'));

        _this.setup(x, y);
        return _this;
    }

    _createClass(Bullet, [{
        key: "setup",
        value: function setup(x, y) {
            this.speed = (0, _utils.randomBetween)(1, 3);
            this.x = x;
            this.y = y;
            this.scale = { x: 2, y: 2 };
        }
    }, {
        key: "update",
        value: function update(dt) {
            this.y -= dt * 400;
        }
    }]);

    return Bullet;
}(_GameObject3.default);

exports.Bullet = Bullet;

},{"../game/GameObject":7,"../game/utils":9}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject2 = require("../game/GameObject");

var _GameObject3 = _interopRequireDefault(_GameObject2);

var _utils = require("../game/utils");

var _Anim = require("../game/Anim");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_GameObject) {
    _inherits(Enemy, _GameObject);

    function Enemy(game) {
        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, game, 'enemy'));

        _this.setup();
        return _this;
    }

    _createClass(Enemy, [{
        key: "setup",
        value: function setup() {
            this.speed = (0, _utils.randomBetween)(1, 3);
            this.x = (0, _utils.randomBetween)(0, 230 * 2);
            this.y = -(0, _utils.randomBetween)(0, 260 * 2);
            this.tileW = 32;
            this.tileH = 32;
            this.anim = _Anim.Anim.new(this.game);
            var animConfig = {
                frames: [{ x: 0, y: 0 }, { x: 1, y: 0 }],
                speed: 0.08
            };
            this.anim.setupAnimation(animConfig);
            this.scale = { x: 2, y: 2 };
        }
    }, {
        key: "update",
        value: function update(dt) {
            this.y += dt * 100 * this.speed;
            if (this.y >= 272 * 2.5) {
                this.setup();
            }
            this.anim.update(dt);
        }
    }, {
        key: "draw",
        value: function draw() {
            if (!this.alive) {
                return;
            }

            var ctx = this.game.context;
            var img = this.texture;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.scale(this.scale.x, this.scale.y);
            ctx.drawImage(img, this.anim.frame.x * this.tileW, this.anim.frame.y * this.tileH, this.tileW, this.tileH, 0, 0, this.tileW, this.tileH);
            ctx.restore();
        }
    }]);

    return Enemy;
}(_GameObject3.default);

exports.Enemy = Enemy;

},{"../game/Anim":5,"../game/GameObject":7,"../game/utils":9}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ship = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject2 = require("../game/GameObject");

var _GameObject3 = _interopRequireDefault(_GameObject2);

var _Anim = require("../game/Anim");

var _Bullet = require("./Bullet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ship = function (_GameObject) {
    _inherits(Ship, _GameObject);

    function Ship(game, x, y) {
        _classCallCheck(this, Ship);

        var _this = _possibleConstructorReturn(this, (Ship.__proto__ || Object.getPrototypeOf(Ship)).call(this, game, 'ship'));

        _this.setup(x, y);
        return _this;
    }

    _createClass(Ship, [{
        key: "setup",
        value: function setup(x, y) {
            this.x = x;
            this.y = y;
            this.tileW = 16;
            this.tileH = 24;
            this.speed = 10;
            this.cooldown = 0;
            this.anim = _Anim.Anim.new(this.game);
            var animConfig = {
                frames: [{ x: 2, y: 0 }, { x: 2, y: 1 }],
                speed: 0.08
            };
            this.anim.setupAnimation(animConfig);
            this.scale = { x: 2.5, y: 2.5 };
            this.leftEdge = 0;
            this.rightEdge = this.game.canvas.width - this.tileW * 2;
            this.topEdge = 0;
            this.bottomEdge = this.game.canvas.height - this.tileH * 2;
        }
    }, {
        key: "update",
        value: function update(dt) {
            if (this.cooldown > 0) {
                this.cooldown--;
            }
            this.anim.update(dt);
        }
    }, {
        key: "draw",
        value: function draw() {
            if (!this.alive) {
                return;
            }

            var ctx = this.game.context;
            var img = this.texture;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.scale(this.scale.x, this.scale.y);
            ctx.drawImage(img, this.anim.frame.x * this.tileW, this.anim.frame.y * this.tileH, this.tileW, this.tileH, 0, 0, this.tileW, this.tileH);
            ctx.restore();
        }
    }, {
        key: "fire",
        value: function fire() {
            if (this.cooldown === 0) {
                this.cooldown = 10;
                var x = this.x + this.tileW;
                var y = this.y;
                var b = new _Bullet.Bullet(this.game, x, y);
                this.scene.addElements(b);
            }
        }
    }, {
        key: "moveX",
        value: function moveX(x) {
            if (x < this.leftEdge) {
                x = this.leftEdge;
            } else if (x > this.rightEdge) {
                x = this.rightEdge;
            }

            this.x = x;
        }
    }, {
        key: "moveY",
        value: function moveY(y) {
            if (y < this.topEdge) {
                y = this.topEdge;
            } else if (y > this.bottomEdge) {
                y = this.bottomEdge;
            }

            this.y = y;
        }
    }, {
        key: "moveLeft",
        value: function moveLeft() {
            this.moveX(this.x - this.speed);
        }
    }, {
        key: "moveRight",
        value: function moveRight() {
            this.moveX(this.x + this.speed);
        }
    }, {
        key: "moveUp",
        value: function moveUp() {
            this.moveY(this.y - this.speed);
        }
    }, {
        key: "moveDown",
        value: function moveDown() {
            this.moveY(this.y + this.speed);
        }
    }]);

    return Ship;
}(_GameObject3.default);

exports.Ship = Ship;

},{"../game/Anim":5,"../game/GameObject":7,"./Bullet":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Anim = function () {
    function Anim(game) {
        _classCallCheck(this, Anim);

        this.game = game;
        this.frames = [{ x: 2, y: 0 }, { x: 2, y: 1 }];
        this.frame = this.frames[0];
        this.frameIndex = 0;
        this.curTime = 0;
        this.speed = 0.08;
    }

    _createClass(Anim, [{
        key: "setupAnimation",
        value: function setupAnimation(config) {
            this.frames = config.frames;
            this.speed = config.speed;
            this.curTime = 0;
        }
    }, {
        key: "update",
        value: function update(dt) {
            this.curTime += dt;
            if (this.curTime > this.speed) {
                this.curTime -= this.speed;
                this.frameIndex = (this.frameIndex + 1) % this.frames.length;
                this.frame = this.frames[this.frameIndex];
            }
        }
    }], [{
        key: "new",
        value: function _new(game) {
            return new this(game);
        }
    }]);

    return Anim;
}();

exports.Anim = Anim;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STEP = 1 / 60;
var MAX_FRAME = STEP * 5;

var Game = function () {
    function Game(images, runCallback) {
        var _this = this;

        _classCallCheck(this, Game);

        this.images = images;
        this.runCallback = runCallback;

        this.scene = null;
        this.actions = {};
        this.keydowns = {};
        this.canvas = document.createElement("canvas");
        this.canvas.width = 256 * 2.5;
        this.canvas.height = 272 * 2.5;
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
        document.querySelector('#box').appendChild(this.canvas);
        // events
        window.addEventListener('keydown', function (event) {
            _this.keydowns[event.key] = true;
        });
        window.addEventListener('keyup', function (event) {
            _this.keydowns[event.key] = false;
        });
        this.init();
    }

    _createClass(Game, [{
        key: "showTips",
        value: function showTips(msg) {
            document.querySelector('#tips').innerHTML = msg;
        }
    }, {
        key: "update",
        value: function update(dt) {
            this.scene.update(dt);
        }
    }, {
        key: "draw",
        value: function draw() {
            this.scene.draw();
        }
    }, {
        key: "registerAction",
        value: function registerAction(key, callback) {
            this.actions[key] = callback;
        }
    }, {
        key: "textureByName",
        value: function textureByName(name) {
            var g = this;
            var img = g.images[name];
            return img;
        }
    }, {
        key: "runWithScene",
        value: function runWithScene(scene) {
            var g = this;
            g.scene = scene;
            var dt = 0;
            var last = 0;
            var loop = function loop(ms) {
                requestAnimationFrame(loop);

                var t = ms / 1000;
                dt = Math.min(t - last, MAX_FRAME);
                last = t;

                // events
                var actions = Object.keys(g.actions);
                for (var i = 0; i < actions.length; i++) {
                    var key = actions[i];
                    if (g.keydowns[key]) {
                        g.actions[key] && g.actions[key]();
                    }
                }

                g.update(dt);
                // clear
                g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
                g.draw();
            };

            requestAnimationFrame(loop);
        }
    }, {
        key: "replaceScene",
        value: function replaceScene(scene) {
            this.scene = scene;
        }
    }, {
        key: "__start",
        value: function __start(scene) {
            this.runCallback(this);
        }
    }, {
        key: "init",
        value: function init() {
            var g = this;
            var loads = [];
            var names = Object.keys(g.images);

            var _loop = function _loop(i) {
                var name = names[i];
                var path = g.images[name];
                var img = new Image();
                img.src = path;
                img.onload = function () {
                    g.images[name] = img;
                    loads.push(1);
                    if (loads.length === names.length) {
                        g.__start();
                    }
                };
            };

            for (var i = 0; i < names.length; i++) {
                _loop(i);
            }
        }
    }], [{
        key: "instance",
        value: function instance() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.i = this.i || new (Function.prototype.bind.apply(this, [null].concat(args)))();
            return this.i;
        }
    }]);

    return Game;
}();

exports.default = Game;

},{"./utils":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
    function GameObject(game, name) {
        _classCallCheck(this, GameObject);

        this.game = game;
        this.texture = game.textureByName(name);
        this.x = 0;
        this.y = 0;
        this.w = this.texture.width;
        this.h = this.texture.height;
        this.opacity = 1;
        this.rotation = 0;
        this.scale = {
            x: 2,
            y: 2
        };
        this.filter = null;
        this.alive = true;
    }

    _createClass(GameObject, [{
        key: "kill",
        value: function kill() {
            this.alive = false;
        }
    }, {
        key: "draw",
        value: function draw() {
            if (!this.alive) {
                return;
            }

            var ctx = this.game.context;
            ctx.save();

            if (this.opacity <= 0) {
                this.opacity = 0;
            }
            ctx.globalAlpha = this.opacity;

            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.scale(this.scale.x, this.scale.y);
            if (this.filter) {
                ctx.filter = "brightness(60%)";
            }
            ctx.drawImage(this.texture, 0, 0);
            ctx.restore();
        }
    }, {
        key: "update",
        value: function update(dt) {}
    }], [{
        key: "new",
        value: function _new(game, name) {
            return new this(game, name);
        }
    }]);

    return GameObject;
}();

exports.default = GameObject;

},{"./utils":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
    function Scene(game) {
        _classCallCheck(this, Scene);

        this.game = game;
        this.elements = [];
    }

    _createClass(Scene, [{
        key: "addElements",
        value: function addElements(texture) {
            texture.scene = this;
            this.elements.push(texture);
        }
    }, {
        key: "removeElements",
        value: function removeElements(texture) {
            this.elements = this.elements.filter(function (c) {
                return c !== texture;
            });
        }
    }, {
        key: "draw",
        value: function draw() {
            var elements = this.elements;
            for (var i = 0; i < elements.length; i++) {
                var e = elements[i];
                e.draw();
            }
        }
    }, {
        key: "update",
        value: function update(dt) {
            var elements = this.elements;
            for (var i = 0; i < elements.length; i++) {
                var e = elements[i];
                e.update(dt);
            }
        }
    }], [{
        key: "new",
        value: function _new(game) {
            return new this(game);
        }
    }]);

    return Scene;
}();

exports.default = Scene;

},{"./utils":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var collide = function collide(a, b) {
    return !(a.x + a.w < b.x || a.y + a.h < b.y || b.x + b.w < a.x || b.y + b.h < a.y);
};

var randomBetween = function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
};

exports.randomBetween = randomBetween;
exports.collide = collide;

},{}],10:[function(require,module,exports){
"use strict";

var _Game = require("./game/Game");

var _Game2 = _interopRequireDefault(_Game);

var _SceneMain = require("./scene/SceneMain");

var _SceneMain2 = _interopRequireDefault(_SceneMain);

var _SceneStart = require("./scene/SceneStart");

var _SceneStart2 = _interopRequireDefault(_SceneStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __main = function __main() {
    var images = {
        bullet: 'res/images/bullet.png',
        sky: 'res/images/sky.png',
        ship: 'res/images/ship.png',
        enemy: 'res/images/enemy-big.png',
        fxSmoke0: 'res/images/fxSmoke0.png',
        fire: 'res/images/fire.png'
    };
    var game = _Game2.default.instance(images, function (g) {
        var s = _SceneMain2.default.new(g);
        g.runWithScene(s);
    });
};

__main();

},{"./game/Game":6,"./scene/SceneMain":12,"./scene/SceneStart":13}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ParticlePool = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject2 = require("../game/GameObject");

var _GameObject3 = _interopRequireDefault(_GameObject2);

var _utils = require("../game/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Particle = function (_GameObject) {
    _inherits(Particle, _GameObject);

    function Particle(game) {
        _classCallCheck(this, Particle);

        var _this = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, game, 'fire'));

        _this.setup();
        return _this;
    }

    _createClass(Particle, [{
        key: "setup",
        value: function setup() {
            this.life = 0;
            this.scale = { x: 2, y: 2 };
        }
    }, {
        key: "init",
        value: function init(x, y, vx, vy, life) {
            this.life = life;
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.scale = { x: 2, y: 2 };
        }
    }, {
        key: "isActive",
        value: function isActive() {
            return this.life > 0;
        }
    }, {
        key: "update",
        value: function update(dt) {
            if (!this.isActive()) {
                return false;
            }

            this.life--;
            this.x += this.vx;
            this.y += this.vy;
            var factor = (0, _utils.randomBetween)(-0.03, -0.05);
            this.vx += factor * this.vx;
            this.vy += factor * this.vy;

            return this.life <= 0;
        }
    }]);

    return Particle;
}(_GameObject3.default);

var ParticlePool = function () {
    function ParticlePool(game) {
        _classCallCheck(this, ParticlePool);

        this.pool = [];
        this.poolSize = 1000;
        for (var i = 0; i < this.poolSize; i++) {
            this.pool.push(Particle.new(game));
        }
        this.firstAvailable_ = this.pool[0];
        for (var _i = 0; _i < this.poolSize - 1; _i++) {
            this.pool[_i].next = this.pool[_i + 1];
        }

        this.pool[this.poolSize - 1].next = null;
    }

    _createClass(ParticlePool, [{
        key: "update",
        value: function update(dt) {
            for (var i = 0; i < this.pool.length; i++) {
                var p = this.pool[i];

                if (p.update(dt)) {
                    this.pool[i].next = this.firstAvailable_;
                    this.firstAvailable_ = this.pool[i];
                }
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            for (var i = 0; i < this.pool.length; i++) {
                var p = this.pool[i];
                if (p.isActive()) {
                    p.draw();
                }
            }
        }
    }, {
        key: "create",
        value: function create(x, y, count) {
            if (this.firstAvailable_ === null) {
                console.log('没有可用的粒子');
                return;
            }

            for (var i = 0; i < count; i++) {
                var p = this.firstAvailable_;
                this.firstAvailable_ = p.next;

                if (this.firstAvailable_ === null) {
                    break;
                }
                var vx = (0, _utils.randomBetween)(-10, 10);
                var vy = (0, _utils.randomBetween)(-10, 7);
                var lifetime = (0, _utils.randomBetween)(100, 120);
                p.init(x, y, vx, vy, lifetime);
            }
        }
    }]);

    return ParticlePool;
}();

exports.ParticlePool = ParticlePool;

},{"../game/GameObject":7,"../game/utils":9}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Scene2 = require("../game/Scene");

var _Scene3 = _interopRequireDefault(_Scene2);

var _Background = require("../entities/Background");

var _Ship = require("../entities/Ship");

var _Enemy = require("../entities/Enemy");

var _ParticleSystem = require("../particle/ParticleSystem");

var _utils = require("../game/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneMain = function (_Scene) {
    _inherits(SceneMain, _Scene);

    function SceneMain(game) {
        _classCallCheck(this, SceneMain);

        var _this = _possibleConstructorReturn(this, (SceneMain.__proto__ || Object.getPrototypeOf(SceneMain)).call(this, game));

        _this.setup();
        _this.setupInputs();
        return _this;
    }

    _createClass(SceneMain, [{
        key: "setup",
        value: function setup() {
            this.game.showTips('按 W S A D 控制上下左右，按 J 发射子弹');
            this.bg = new _Background.Background(this.game);
            this.addElements(this.bg);

            this.ship = new _Ship.Ship(this.game, 300, 471);
            this.addElements(this.ship);

            this.enemyCount = 0;
            this.maxEnemyCount = 5;
            this.addEnemies();

            this.particlePool = new _ParticleSystem.ParticlePool(this.game);
            this.addElements(this.particlePool);
        }
    }, {
        key: "addEnemies",
        value: function addEnemies() {
            if (this.enemyCount >= this.maxEnemyCount) {
                return;
            }

            for (var i = this.enemyCount; i < this.maxEnemyCount; i++) {
                var enemy = _Enemy.Enemy.new(this.game);
                this.addElements(enemy);
                this.enemyCount++;
            }
        }
    }, {
        key: "setupInputs",
        value: function setupInputs() {
            var _this2 = this;

            var g = this.game;
            var s = this;
            g.registerAction('a', function () {
                s.ship.moveLeft();
            });
            g.registerAction('d', function () {
                s.ship.moveRight();
            });
            g.registerAction('w', function () {
                s.ship.moveUp();
            });
            g.registerAction('s', function () {
                s.ship.moveDown();
            });
            g.registerAction('j', function () {
                s.ship.fire();
            });
            g.registerAction('r', function () {
                _this2.game.replaceScene(SceneMain.new(_this2.game));
            });
        }
    }, {
        key: "update",
        value: function update(dt) {
            _get(SceneMain.prototype.__proto__ || Object.getPrototypeOf(SceneMain.prototype), "update", this).call(this, dt);
            this.addEnemies();
            this.checkCollide();
        }
    }, {
        key: "draw",
        value: function draw() {
            _get(SceneMain.prototype.__proto__ || Object.getPrototypeOf(SceneMain.prototype), "draw", this).call(this);
        }
    }, {
        key: "checkCollide",
        value: function checkCollide() {
            var _this3 = this;

            for (var i = 0; i < this.elements.length; i++) {
                var other = this.elements[i];
                for (var j = 0; j < this.elements.length; j++) {
                    var e = this.elements[j];
                    var commands = [{
                        o1: other,
                        o2: e,
                        o1Type: 'Enemy',
                        o2Type: 'Bullet',
                        action: function action(o1, o2) {
                            _this3._killActions(o1, o2);
                            _this3._createParticleAction(o1);
                        }
                    }, {
                        o1: other,
                        o2: e,
                        o1Type: 'Enemy',
                        o2Type: 'Ship',
                        action: function action(o1, o2) {
                            _this3._killActions(o1, o2);
                            _this3._createParticleAction(o2);
                            _this3.endGame();
                        }
                    }];

                    for (var k = 0; k < commands.length; k++) {
                        this.handleHit(commands[k]);
                    }
                }
            }
        }
    }, {
        key: "_killActions",
        value: function _killActions(o1, o2) {
            o1.kill();
            o2.kill();
            this.removeElements(o1);
            this.removeElements(o2);
            this.enemyCount--;
        }
    }, {
        key: "_createParticleAction",
        value: function _createParticleAction(o1) {
            this.particlePool.create(o1.x, o1.y, 10);
        }
    }, {
        key: "handleHit",
        value: function handleHit(command) {
            var o1 = command.o1,
                o2 = command.o2,
                o1Type = command.o1Type,
                o2Type = command.o2Type,
                action = command.action;

            if (o1.constructor.name === o1Type && o2.constructor.name === o2Type) {
                if ((0, _utils.collide)(o1, o2)) {
                    action(o1, o2);
                }
            }
        }
    }, {
        key: "endGame",
        value: function endGame() {
            var _this4 = this;

            this.game.showTips('按 R 重新开始游戏');
            this.game.registerAction('r', function () {
                _this4.game.replaceScene(SceneMain.new(_this4.game));
                _this4.game.registerAction('r', null);
            });
        }
    }]);

    return SceneMain;
}(_Scene3.default);

exports.default = SceneMain;

},{"../entities/Background":1,"../entities/Enemy":3,"../entities/Ship":4,"../game/Scene":8,"../game/utils":9,"../particle/ParticleSystem":11}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Scene2 = require("../game/Scene");

var _Scene3 = _interopRequireDefault(_Scene2);

var _Background = require("../entities/Background");

var _Ship = require("../entities/Ship");

var _SceneMain = require("./SceneMain");

var _SceneMain2 = _interopRequireDefault(_SceneMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneStart = function (_Scene) {
    _inherits(SceneStart, _Scene);

    function SceneStart(game) {
        _classCallCheck(this, SceneStart);

        var _this = _possibleConstructorReturn(this, (SceneStart.__proto__ || Object.getPrototypeOf(SceneStart)).call(this, game));

        _this.setup();
        _this.setupInputs();
        return _this;
    }

    _createClass(SceneStart, [{
        key: "setup",
        value: function setup() {
            this.game.showTips('按 K 开始游戏');
            this.bg = new _Background.SingleBackground(this.game, 0, 0);
            this.addElements(this.bg);

            this.ship = new _Ship.Ship(this.game, 300, 471);
            this.addElements(this.ship);
        }
    }, {
        key: "setupInputs",
        value: function setupInputs() {
            var _this2 = this;

            var g = this.game;
            g.registerAction('k', function () {
                g.replaceScene(_SceneMain2.default.new(g), 'playing');
                _this2.game.registerAction('k', null);
            });
        }
    }, {
        key: "update",
        value: function update(dt) {
            _get(SceneStart.prototype.__proto__ || Object.getPrototypeOf(SceneStart.prototype), "update", this).call(this, dt);
        }
    }]);

    return SceneStart;
}(_Scene3.default);

exports.default = SceneStart;

},{"../entities/Background":1,"../entities/Ship":4,"../game/Scene":8,"./SceneMain":12}]},{},[10]);
