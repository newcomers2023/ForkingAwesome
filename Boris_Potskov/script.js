function sum() {
    document.getElementById("result").innerHTML = "Ergebnis: ";
    var input1 = document.getElementById("num1").value;
    var input2 = document.getElementById("num2").value;

    var num1 = parseInt(input1);
    var num2 = parseInt(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Es müssen zwei Zahlen eingegeben werden!");
} else {
        document.getElementById("result").innerHTML += num1 + num2;
}
}

function sub() {
    document.getElementById("result").innerHTML = "Ergebnis: ";
    var input1 = document.getElementById("num1").value;
    var input2 = document.getElementById("num2").value;

    var num1 = parseInt(input1);
    var num2 = parseInt(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Es müssen zwei Zahlen eingegeben werden");
} else {
        document.getElementById("result").innerHTML += num1 - num2;
}
}

function mul() {
    document.getElementById("result").innerHTML = "Ergebnis: ";
    var input1 = document.getElementById("num1").value;
    var input2 = document.getElementById("num2").value;

    var num1 = parseInt(input1);
    var num2 = parseInt(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Es müssen zwei Zahlen eingegeben werden");
} else {
        document.getElementById("result").innerHTML += num1 * num2;
}
}

function div() {
    document.getElementById("result").innerHTML = "Ergebnis: ";
    var input1 = document.getElementById("num1").value;
    var input2 = document.getElementById("num2").value;

    var num1 = parseInt(input1);
    var num2 = parseInt(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Es müssen zwei Zahlen eingegeben werden");
} else {
        document.getElementById("result").innerHTML += num1 / num2;
}
}