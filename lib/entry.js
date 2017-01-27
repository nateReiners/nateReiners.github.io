import Util from './util';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext("2d");
    const stage = new createjs.Stage("canvas");

    Util.addStars(canvas, stage);
    // turn canvas into starfield

    createjs.Ticker.addEventListener("tick", tick);
    const tick = () => (console.log("s"));
});
