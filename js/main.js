function show(){
    if (document.getElementById("pickcolor").value == "grey"){
        document.getElementById("random").style.backgroundColor = "grey";
    }
    else if (document.getElementById("pickcolor").value == "blue"){
        document.getElementById("random").style.backgroundColor = "blue";
    }
    else if (document.getElementById("pickcolor").value == "green"){
        document.getElementById("random").style.backgroundColor = "green";
    }
    else if (document.getElementById("pickcolor").value == "yellow"){
        document.getElementById("random").style.backgroundColor = "yellow";
    }
    else if (document.getElementById("pickcolor").value == "lightblue"){
        document.getElementById("random").style.backgroundColor = "lightblue";
    }
    else if (document.getElementById("pickcolor").value == "black"){
        document.getElementById("random").style.backgroundColor = "black";
    }
    else if (document.getElementById("pickcolor").value == "red"){
        document.getElementById("random").style.backgroundColor = "red";
    }
    else if (document.getElementById("pickcolor").value == "default"){
        document.getElementById("random").style.backgroundColor = "white";
    }
}
function reset(){
    document.getElementById("random").style.backgroundColor = "white";
}
function generate(){
    var x = Math.floor(Math.random()* 256) + 1;
    var y = Math.floor(Math.random()* 256) + 1;
    var z = Math.floor(Math.random()* 256) + 1;
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var motor = document.querySelector("#random");
    motor.style.backgroundColor = bgColor;
}

