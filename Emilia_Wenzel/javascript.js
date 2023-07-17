


function changeText() {

    document.getElementById ("heading"). innerHTML = "Neuer Text !";
                       }


function checkNumber() {
    var input = 
    document.getElementById ("number").value;
    var number = input;
    var lange = number.length

    if (lange < 5) {
        document.getElementById("result").innerHTML = "Der Text ist kleiner als 5 Zeichen";
    } else  {

        document.getElementById("result").innerHTML = "Der Text ist größer als 5 Zeichen";

    }
}

function add() {
    result.value= (number1.value*1) + (number2.value*1);
}

function subtract() {   
    result.value= (number1.value*1) - (number2.value*1);
}

function multiply() {
    result.value= (number1.value*1) * (number2.value*1);
}

function divide() {
    result.value= (number1.value*1) / (number2.value*1);
}