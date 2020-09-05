
function displayTag(){
    document.getElementById("checkInBox").innerHTML = `${name}`;
}

function refreshDiv(){
    setInterval(
        function () {
            $('#checkInBox').load('#checkInBox');
        }, 500);
}









/*
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.0/jquery.min.js"></script>
<script type="text/javascript">
var auto_refresh = setInterval(
function () {
    $('#div').load('#div');
}, 1000);
</script>


function reloadDiv(){
   document.getElementById("checkInBox").innerHTML = `${newCheckin}`;
    //newCheckin = document.getElementById("id").value
    //if (`${newCheckin}` ==  1 ){
    //window.location.reload();
    //newCheckin = 0;
    //}
}
*/



