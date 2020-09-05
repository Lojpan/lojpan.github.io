
function displayTag(){
    document.getElementById("checkInBox").innerHTML = `${name}`;
}

function refreshDiv() {
    $('#checkInBox').load('#checkInBox');
}


/*
function refreshDiv(){
    setInterval(
        function () {
            $('#checkInBox').load('#checkInBox');
        }, 500);
}
*/


