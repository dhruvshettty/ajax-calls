/*
This code uses jQuery's
.ajax() call method
*/

$("#btn").click(function(){
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: 'json'  // Intelligent Guess
  })
  .done(function(data){
    $("p").text(data[0])
  })
  .fail(function(){
    console.log("FAILED") // Triggers if any error( status code and internet off)
  })
})