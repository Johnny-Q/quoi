var socket = io.connect("localhost:8080");
var button = document.getElementsByTagName('button');
console.log(button);
var data = document.getElementsByTagName("input");
var sent = document.getElementsByClassName("sent")[0];
button[0].addEventListener("click", function () {
    if (data[0].value != "") {
        socket.emit("q", {
            q: data[0].value
        });
        
        data[0].value = "";
        sent.classList.toggle("hidden");
        setTimeout(function(){sent.classList.toggle("hidden")}, 2000);
    }
});