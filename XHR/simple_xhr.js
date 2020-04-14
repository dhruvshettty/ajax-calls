/*
This code implements a simple XMLHttpRequest 
to a Github API and displays a Zen quote to 
the console
*/

var XHR = new XMLHttpRequest();

// Further reading on state in documentation
XHR.onreadystatechange = function(){
  if(XHR.readyState == 4){
    if(XHR.status == 200){
      console.log(XHR.responseText);
    } else{
      console.log("There was a problem");
    } 
  }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();