
newCheckIn = `${newCheckIn}`;

function displayTag(){
    document.getElementById("checkInBox").innerHTML = `${name}`;
    if(newCheckIn = 1){
        refreshDiv();
        //newCheckIn = 0;
    }
}

function refreshDiv() {
    //$('#checkInBox').load('#checkInBox');
    window.location.reload();
}


/*
function refreshDiv(){
    setInterval(
        function () {
            $('#checkInBox').load('#checkInBox');
        }, 500);
}
*/


