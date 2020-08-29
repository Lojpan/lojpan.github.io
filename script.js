function displayTag(){
var element = document.getElementById("checkInBox");
tempTag = 10;
//var tempTag = tempTag.toString();
//let tag_div = document.createElement('checkInBox');
element.innerHTML = `${tempTag}`;   
tag_div.appendChild(element);
}