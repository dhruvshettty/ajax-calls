/*
Using $.getJSON() to get data
from a cat API endpoint
*/

$("#btn").click(function(){
  $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    var url = data.file;
    $("#catImg").attr("src", data.file)
  })
  .fail(function(){
    console.log("ERROR!")
  })
})