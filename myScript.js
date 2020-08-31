function displayTag(){
    reloadPage();
let element = document.getElementById("checkInBox").innerHTML = `${name}`;
}

function reloadPage(){
    window.location.reload();
}
