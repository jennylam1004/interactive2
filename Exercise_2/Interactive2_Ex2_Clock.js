var images = new Array('GIFs/0.gif','GIFs/1.gif','GIFs/2.gif','GIFs/3.gif','GIFs/4.gif','GIFs/5.gif','GIFs/6.gif','GIFs/7.gif','GIFs/8.gif','GIFs/9.gif',);
var interval = setInterval(function()
{
  var date = new Date();

  var hour = String(date.getHours());
  var minutes = String(date.getMinutes());
  var seconds = String(date.getSeconds());

  if(hour<10)
{
  $('#hour1').attr('src', images[0]);
  $('#hour2').attr('src', images[hour.charAt(0)]);
}
  else {
  $('#hour1').attr('src', images[hour.charAt(0)]);
  $('#hour2').attr('src', images[hour.charAt(1)]);
  }

  if(minutes<10)
{
  $('#minutes1').attr('src', images[0]);
  $('#minutes2').attr('src', images[minutes.charAt(0)]);
}
  else {
  $('#minutes1').attr('src', images[minutes.charAt(0)]);
  $('#minutes2').attr('src', images[minutes.charAt(1)]);
  }

  if(seconds<10)
{
  $('#seconds1').attr('src', images[0]);
  $('#seconds2').attr('src', images[seconds.charAt(0)]);
}
  else {
  $('#seconds1').attr('src', images[seconds.charAt(0)]);
  $('#seconds2').attr('src', images[seconds.charAt(1)]);
  }

},1000)

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
    this.hue = 175 + Math.random() * 75;
    this.lightness = 100;
    this.angles = [Math.random() * 360, Math.random() * 360];
    this.speed = 0.01 + Math.random() * 0.04;
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

    generatePreviewNodes(120);

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#1D1F20';
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
