const button = document.getElementById("button");
const body = document.querySelector("body");
const colors = ["teal","violet","red","yellow","green","success","grey","blue","purple","black","pink"]


body.style.backgroundColor = "teal";
button.addEventListener("click", changeBackground);

function changeBackground(){
    colorIndex = Math.floor( Math.random() * colors.length )
    body.style.backgroundColor = colors[colorIndex]
}