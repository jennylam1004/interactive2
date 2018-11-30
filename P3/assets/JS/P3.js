// $("info").click(function() {
//    $(this).toggleClass("show");
//    $(this).toggleClass("hide");
// });

// $(document).ready(function() {
//   $("#cf_onclick").click(function() {
//   $("#cf2 img.top").toggleClass("hide");
// });
// });

//reference : https://codepen.io/gbnikolov/pen/MaVBQL
let imageOne = document.querySelector('#img_1')

imageOne.addEventListener('click',function(){
    document.body.classList.toggle('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')

});

// let imageOneUnactive = document.querySelector('#img_1 imageOneActive')
//
// imageOneUnactive.addEventListener('click',function(){
//     document.body.classList.remove('imageOneActive')
//     // document.body.classList.add('imageTwoUnactive')
//     // document.body.classList.add('imageThreeUnactive')
//     // document.body.classList.add('imageFourUnactive')
//     // document.body.classList.add('imageFiveUnactive')
//     // document.body.classList.add('imageSixUnactive')
//     // document.body.classList.add('imageSevenUnactive')
// });

let imageTwo = document.querySelector('#img_2')

imageTwo.addEventListener('click',function(){
    document.body.classList.toggle('imageTwoActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageThree = document.querySelector('#img_3')

imageThree.addEventListener('click',function(){
    document.body.classList.toggle('imageThreeActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageFour = document.querySelector('#img_4')

imageFour.addEventListener('click',function(){
    document.body.classList.toggle('imageFourActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageFive = document.querySelector('#img_5')

imageFive.addEventListener('click',function(){
    document.body.classList.toggle('imageFiveActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageSix = document.querySelector('#img_6')

imageSix.addEventListener('click',function(){
    document.body.classList.toggle('imageSixActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageSevenActive')
});

let imageSeven = document.querySelector('#img_7')

imageSeven.addEventListener('click',function(){
    document.body.classList.toggle('imageSevenActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageFourActive')
});


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

var LineAnimation = (function() {

  function Node(startPos, endPos, lineWidth) {
    this.startPos = startPos;
    this.endPos = endPos;
    this.lineWidth = lineWidth;
    // this.hue = 175 + Math.random() * 75;
    this.lightness = 100;
    this.angles = [Math.random() * 360, Math.random() * 360];
    this.speed = 0.0001 + Math.random() * 0.009;
    this.direction = Math.round(Math.random());
  }

  Node.prototype.render = function(ctx) {
    ctx.save();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = 'hsl(' + this.hue + ', 100%, ' + this.lightness + '%)';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(this.startPos.x, this.startPos.y);
    ctx.lineTo(this.endPos.x, this.endPos.y);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function NodeMesh() {
    this.nodes = [];
  }

  // mouse related stuff
  function getMousePosition(element) {
    var mouse = { x: 0, y: 0 };
    element.addEventListener('mousemove', function(event) {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    }, false);
    return mouse;
  }

  document.addEventListener('mousemove', mouseMove, false);
  function mouseMove() {
    var node;
    node = new Node({
      x: oldMousePos.x,
      y: oldMousePos.y
    }, {
      x: mouse.x,
      y: mouse.y
    }, 1 + Math.random());

    nodeMesh.nodes.push(node);

  }

  // declare global vars for the app
  var width, height,
      canvas, ctx,
      mouse, oldMousePos,
      nodeMesh;

  function init(size, cnvs) {
    width = size.width;
    height = size.height;
    canvas = cnvs;
    ctx = canvas.getContext('2d');
    mouse = getMousePosition(canvas);
    oldMousePos = mouse;
    nodeMesh = new NodeMesh();

    // generatePreviewNodes(120);

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#fff';
  }


  function render() {
    ctx.fillRect(0, 0, width, height);
    nodeMesh.nodes.forEach(renderNode);
  }

  function renderNode(node, i) {

    node.startPos.x += Math.sin(node.angles[0]) * node.speed * (width / 5);
    node.startPos.y += Math.cos(node.angles[0]) * node.speed * (width / 5);

    node.lightness -= 1;

    if (node.lightness <= 50) { nodeMesh.nodes.splice(i, 1) };

    node.angle -= node.speed;

    node.render(ctx);
  }

  return {
    init: init,
    render: render
  };

}());

LineAnimation.init({ width: window.innerWidth, height: window.innerHeight }, document.querySelector('canvas'));

(function renderFrame(){
  window.requestAnimFrame(renderFrame);
  LineAnimation.render();
}());
