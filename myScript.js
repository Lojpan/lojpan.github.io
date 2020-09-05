
function displayTag(){
    document.getElementById("checkInBox").innerHTML = `${name}`;
}

function refreshDiv(){
    setInterval(
        function () {
            $('#checkInBox').load('#checkInBox');
        }, 300);
}



