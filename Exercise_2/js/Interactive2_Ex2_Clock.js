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
