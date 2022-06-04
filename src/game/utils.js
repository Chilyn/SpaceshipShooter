const collide = (a, b) => {
    return !(a.x + a.w < b.x ||
        a.y + a.h < b.y ||
        b.x + b.w < a.x ||
        b.y + b.h < a.y)
}

const randomBetween = function (min, max) {
    return Math.random() * (max - min) + min;
}

export {
    randomBetween,
    collide
};
