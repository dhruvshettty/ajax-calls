/*
This code gets Bitcoin currency
rate exchange from a Coin Desk API
using the Fetch call
*/

url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(function(response){
  console.log(response);
  return response.json()   // Used for parsing JSON
})
.then(function(data){
  console.log(data.bpi.EUR.rate);
})