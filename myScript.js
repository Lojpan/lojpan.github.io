function displayTag(){
    document.getElementById("checkInBox").innerHTML = `${name}`;
}

function refreshDiv() {
    $('#checkInBox').load('#checkInBox');
}


/*

function updateDiv(){
    var name_temp = document.getElementById("checkInBox").innerHTML = `${name}`; 
    while(name_temp == ""){
        setInterval(
            function () {
                $('#checkInBox').load('#checkInBox');
            }, 3000);
    }
    displayTag();
}

*/


