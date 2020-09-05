

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

function displayTag(){
    document.getElementById("checkInBox").innerHTML = `${name}`;
            //refreshDiv();
}


function refreshDiv() {
    //document.getElementById("checkInBox").innerHTML = `${name}`;
    $('#checkInBox').load('#checkInBox');
    //window.location.reload();
}



/*

function displayTag(){
    document.getElementById("checkInBox").innerHTML = `${name}`;
}

function refreshDiv(){
    setInterval(
        function () {
            $('#checkInBox').load('#checkInBox');
        }, 500);
}

var newCheckIn = document.getElementById("checkInBox") = `${newCheckIn}`;




*/


