
function displayTag(){
let element = document.getElementById("checkInBox").innerHTML = `${name}`;
reloadDiv();
}

function reloadDiv(){

    //let element = document.getElementById("checkInBox").innerHTML = `${newCheckin}`;
    if (`${newCheckin}` ==  1 ){
    window.location.reload();
    newCheckin = 0;
    }
}


/*
<script> 
$(document).ready(function(){
setInterval(function(){
      $("checkInBox").load("checkInBox" );
}, 3000);
});
</script>

<div id="here">dynamic content ?</div>

setTimeout(function (){
    window.location.reload();
 },10000);
 */





