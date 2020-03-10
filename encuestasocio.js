function envio() {
    document.getElementById("myProgress").style.display = "block";
    document.getElementById("botonEnvio").disabled = true;
    move();

}

var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                window.open("./gracias.html", "_self")
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}