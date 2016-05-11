$(document).ready(function(){
  //$(h1).css("background-color", "green");
  //////respond to a click steps
  //1.
  var button = $('#button-1');
  //2.
  button.click(function(){
///////////////////////////////////////

  ///////grab the value of input steps
  //1.
var value = $("#field-1").val()
 //2.
console.log(value);
/////////////////////////////////////
  //populate display with value
  //1.
  $('#display').append ("<ol>" + "<li class = 'input-1'>" + value + "</li>" + "</ol>");
});



});
