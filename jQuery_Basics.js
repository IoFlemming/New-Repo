$("#h1").click(function(){
$("#h1").hide ("#h1").fadeIn(6000);
})
$(".para").click(function(){
$(".para").fadeOut(6000);
})
$(".para2").click(function(){
$(".para2").fadeIn(6000);
})
var count = $("h2").find ("*").length;
alert(count);
$(".para").text("Behold! I am the Magnificent Jquery! I have decided that Latin is boring and I will change your tags! MWHWHWHWHWHWHAHAHAHAHAHAHAHA!!....but alas, I only have enough magical power to change a couple of tags to English.....OH NO! I'M FADING!!!!AHAHHHHHHHHAHAAAAA!!");
$("body").css("background", "#FFD700");
$(".para").css("color", "#fefdfb");
