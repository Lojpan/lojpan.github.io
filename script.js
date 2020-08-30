function displayTag(_input){
var element = document.getElementById("checkInBox");
tempTag = _input;
//var tempTag = tempTag.toString();
//let tag_div = document.createElement('checkInBox');
element.innerHTML = `${tempTag}`;   
tag_div.appendChild(element);
}