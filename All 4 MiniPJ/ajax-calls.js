var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var xhrButton = document.querySelector('#xhr');
var fetchButton = document.querySelector('#fetch');
var axiosButton = document.querySelector('#axios');
var quoteDisp = document.querySelector('#quote');

xhrButton.addEventListener('click',function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var quote = JSON.parse(XHR.responseText);
      quoteDisp.innerHTML = quote;
    }
  }
  XHR.open('GET', url);
  XHR.send();
})

fetchButton.addEventListener('click', function(){
  fetch(url)
  .then(handleErrors)
  .then(function(data){
    quoteDisp.innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  })
  
  function handleErrors(response){
    if(!response.ok){
      throw Error(response.status)
    }
    return response.json()
  }
})

$("#jquery").click(function(){
  $.getJSON(url)
  .done(function(data){
    $(quoteDisp).text(data);
  })
  .fail(function(){
    console.log(error);
  })
})

axiosButton.addEventListener('click', function(){
  axios.get(url)
  .then(function(response){
    quoteDisp.innerText = response.data[0];
  })
  .catch(function(){
    console.log("ERROR!");
  })
})