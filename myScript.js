

function displayTag(){
    var newCheckIn = document.getElementById("checkInBox") = `${newCheckIn}`;
    
        if(newCheckIn = 1){
            document.getElementById("checkInBox").innerHTML = `${name}`;
            refreshDiv();
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


