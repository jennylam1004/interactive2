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
    document.body.classList.add('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
    console.log('hi')
});

let imageTwo = document.querySelector('#img_2')

imageTwo.addEventListener('click',function(){
    document.body.classList.add('imageTwoActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageThree = document.querySelector('#img_3')

imageThree.addEventListener('click',function(){
    document.body.classList.add('imageThreeActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageFour = document.querySelector('#img_4')

imageFour.addEventListener('click',function(){
    document.body.classList.add('imageFourActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageFive = document.querySelector('#img_5')

imageFour.addEventListener('click',function(){
    document.body.classList.add('imageFiveActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageSevenActive')
});

let imageSix = document.querySelector('#img_6')

imageFour.addEventListener('click',function(){
    document.body.classList.add('imageSixActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageFourActive')
    document.body.classList.remove('imageSevenActive')
});
\
let imageSeven = document.querySelector('#img_7')

imageFour.addEventListener('click',function(){
    document.body.classList.add('imageSevenActive')
    document.body.classList.remove('imageOneActive')
    document.body.classList.remove('imageTwoActive')
    document.body.classList.remove('imageThreeActive')
    document.body.classList.remove('imageFiveActive')
    document.body.classList.remove('imageSixActive')
    document.body.classList.remove('imageFourActive')
});

// imageOne.addEventListener('click',function(){
//     document.body.classList.add('imageOneActive')
//     document.body.classList.remove('imageTwoActive')
//     document.body.classList.remove('imageThreeActive')
//     document.body.classList.remove('imageFourActive')
//     document.body.classList.remove('imageFiveActive')
//     document.body.classList.remove('imageSixActive')
//     document.body.classList.remove('imageSevenActive')
//     console.log('hi')
// });



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
    this.speed = 0.000001 + Math.random() * 0.04;
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

  function generatePreviewNodes(num) {
    var i, node;
    for (i = 0; i < num; i += 1) {
      node = new Node({
        x: Math.random() * width,
        y: Math.random() * height
      }, {
        x: Math.random() * width,
        y: Math.random() * height
      }, 1 + Math.random());
      nodeMesh.nodes.push(node);
    }
  }

  function render() {
    ctx.fillRect(0, 0, width, height);
    nodeMesh.nodes.forEach(renderNode);
  }

  function renderNode(node, i) {

    node.startPos.x += Math.sin(node.angles[0]) * node.speed * (width / 5);
    node.startPos.y += Math.cos(node.angles[0]) * node.speed * (width / 5);

    node.lightness -= 1;

    if (node.lightness <= 14) { nodeMesh.nodes.splice(i, 1) };

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
