/*
Implements .get(), .post(),
.getJSON() methods of jQuery
*/

// Performs Intelligent Guessing (guess type of data format)
$("#getBtn").click(function(){
  $.get("https://baconipsum.com/api/?type=meat-and-filler")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("ERROR!");
  })
})

$("#postBtn").click(function(){
  var data = {name: "Charlie", city: "Florence"}
  $.post("catsarecoolandsoaredogs.com", data)
  .done(function(data){
    console.log("HI!")
  })
  .fail(function(){
    console.log("ERROR")
  })
})

// getJSON does not do Intelligent Guess, gets JSON data only
$("$getJSONBtn").click(function(){
  $.getJSON("https://baconipsum.com/api/?type=meat-and-filler")
  .done(function(data){
    console.log(data)
  })
  .fail(function(){
    console.log("ERROR!")
  })
})