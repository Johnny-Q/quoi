var socket = io.connect("localhost:8080");
var div = document.getElementsByTagName("div")[0];
socket.on("add", (data)=>{
    var temp = document.createElement("p");
    temp.innerHTML = data.q;
    div.appendChild(temp);
    console.log(data);
});