function changeText() {
    document.getElementById("heading").innerHTML = "Hallo";
}

function checknumber() {
    var input = document.getElementById("number").value;
    var number = input;
    var lange = number.length

    if (lange > 5) {
        document.getElementById("result").innerHTML = "Erfolg!"
    }
    else {
        document.getElementById("result").innerHTML = "Mindestens 5 Zeichen eingeben!"
    }
}


