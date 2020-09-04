

function displayTag(){
let element = document.getElementById("checkInBox").innerHTML = `${name}`;
    reloadDiv();
}

function reloadDiv(){
    if (newCheckin){
    window.location.reload();
    newCheckin = false;
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





