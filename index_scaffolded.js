$(document).ready(function(){

$(document).ready(function(){ //Preparing the document for the "something" that is about to happen.
$("h1").animate({ //Here you are telling your computer that you want to add an animate what is inside your <h1> tag.
'font-size' : '150px', //font-size = the size of the font of the sentence or word inbetween the <h1> tags.
'opacity': '-1'//opacity = the level of transparency the sentence or word has inbetween the <h1> tags. The higher the negative number the clearer it will become. The higher the positive number the bolder the image becomes.
},8000);//This is the speed at which the word or sentence fades out from the screen.
  });

$('#button-1').click(function(){ //This function tells the computer "I want you to do something when I click 'Click me'."
var value = $('#field-1').val();//This portion of JQuery tells the computer "Remember when I told you to do something when I said 'Click Me'? Okay, that something I want you to do is to recognize what I wrote in my 'value=' and do something with that sentence."
display(value);//This portion of the Jquery tells the computer "Okay, remmeber when I asked you to do something when I clicked 'Click me? Well, I want you to do two things. First, I want you to recognize what was written in the 'value=' in the HTML page for the specific id I assigned to you. Secondly, I want you to display the 'value=' I asked you to recgonize on the HTML page.'"
});

$('#button-2').click(function(){//This function tells the computer "I want you to do something when I click 'Click me'."
var value = $('#field-2').val();//This portion of JQuery tells the computer "Remember when I told you to do something when I said 'Click Me'? Okay, that something I want you to do is to recognize what I wrote in my 'value=' and do something with that sentence."
display(value);//This portion of the Jquery tells the computer "Okay, remmeber when I asked you to do something when I clicked 'Click me? Well, I want you to do two things. First, I want you to recognize what was written in the 'value=' in the HTML page for the specific id I assigned to you. Secondly, I want you to display the 'value=' I asked you to recgonize on the HTML page.'"
})

$('#button-3').click(function(){//This function tells the computer "I want you to do something when I click 'Click me'."
var value = $('#field-3').val();//This portion of JQuery tells the computer "Remember when I told you to do something when I said 'Click Me'? Okay, that something I want you to do is to recognize what I wrote in my 'value=' and do something with that sentence."
display(value);//This portion of the Jquery tells the computer "Okay, remmeber when I asked you to do something when I clicked 'Click me? Well, I want you to do two things. First, I want you to recognize what was written in the 'value=' in the HTML page for the specific id I assigned to you. Secondly, I want you to display the 'value=' I asked you to recgonize on the HTML page.'"
})

$("input:text").focus( //This focuses in on each input field and eliminates the text inside when you click inside the box.
function(){
$(this).val(" ");
});

function display(value){ //Now, here is where I am asking the computer to recgonize and display all three of the values listed above.
$('#display').append ("<li class = 'input-1'>" + value + "</li>");//In this section of JQuery, I will now ask the computer to take the values I have asked it to recognize and display and display them inbetween the opening and closing "<h1> tags on the HTML page. I am also asking the computer to not only display the values inbetween the opening anc closing "<h1>" tags, but I also want you to display each value in a unordered list format and communicate with the STYLE.css file and apply the elements in there to each value the is displayed when I click the "Click Me" button.
}
});

//Add a third button for H.W -Due Wednesday 5/11-
