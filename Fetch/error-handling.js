/*
This code implements Error Handling
using Fetch Call
*/

var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(errorHandler)
.then(function(response){
  console.log("Everything is fine");
  console.log(response);
})
.catch(function(error){
  console.log(error);
});

function errorHandler(response){
  if(!response.ok){	// 'ok' function of fetch
    throw Error(response.status)
  }
  return response	// if no error, return reponse as promise
}