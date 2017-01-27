


const Util = {

  addStars (canvas, stage) {
    canvas.style.background = 'black';
    for (var i = 0; i < 150; i++) {
         let x = Math.random() * canvas.offsetWidth;
         let y = Math.random() * canvas.offsetHeight;
         let star = new createjs.Shape();
         star.name = "star";
         star.graphics.beginFill("white")
         star.graphics.drawCircle(x,y,1);
         star.graphics.endFill();
         stage.addChild(star);
         stage.update();
     }
  },

  addObstacles (canvas, stage) {

  }

}



export default Util;
