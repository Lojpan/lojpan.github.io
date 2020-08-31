function displayTag(){
let element = document.getElementById("checkInBox").innerHTML = `${name}`;
setTimeout(function(){
    window.location.reload();
 },5000);
}


