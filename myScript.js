
function displayTag(){
let element = document.getElementById("checkInBox").innerHTML = `${name}`;

if (`${newCheckin}` ==  1 ){
    window.location.reload();
    //newCheckin = 0;
    }

}

function reloadDiv(){
    let newCheckin = document.getElementById("checkInBox").innerHTML = `${newCheckin}`;
    //newCheckin = document.getElementById("id").value
    if (`${newCheckin}` ==  1 ){
    window.location.reload();
    //newCheckin = 0;
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





