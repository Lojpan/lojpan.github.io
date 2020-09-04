

function displayTag(){
let element = document.getElementById("checkInBox").innerHTML = `${name}`;
    reload();
}

function reload(){
    if (newCheckin)
    window.location.reload();
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





