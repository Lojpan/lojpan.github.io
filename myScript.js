

function displayTag(){
    var newCheckIn = document.getElementById("checkInBox") = `${newCheckIn}`;
    document.getElementById("checkInBox").innerHTML = `${name}`;
    if(newCheckIn = 1){
        refreshDiv();
    }
}

function refreshDiv() {
    //$('#checkInBox').load('#checkInBox');
    window.location.reload();
    newCheckIn = 0;
}


/*
function refreshDiv(){
    setInterval(
        function () {
            $('#checkInBox').load('#checkInBox');
        }, 500);
}
*/


