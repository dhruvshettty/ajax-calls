/*
This code gets current Bitcoin
transaction rate from Coindesk's API
*/

var refresh = document.querySelector("button");
var priceDisp = document.querySelector("#price");

// onClick Event Listener
refresh.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var data = JSON.parse(XHR.responseText);
      var price = data.bpi.USD.rate_float;
      priceDisp.innerHTML = price + " USD";
    }
  }
  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
})