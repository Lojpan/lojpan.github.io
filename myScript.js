

function displayTag(){
//var tempTag = 10;
newTag = 12;
const element = document.getElementById("checkInBox");
tag_div = document.createElement('div');
tag_div.innerHTML = `${newTag}`;
element.appendChild(tag_div);
}