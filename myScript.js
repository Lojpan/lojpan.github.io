function displayTag(){
let element = document.getElementById("checkInBox").innerHTML = "Välkommen, " + `${name}`;
}

setTimeout(function(){
    window.location.reload();
 },100000);

