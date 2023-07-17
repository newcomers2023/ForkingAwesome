function calc(op){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    switch(op){
        case "plus":
            var result = parseInt(n1) + parseInt(n2);
            alert(result);
            break;
        case "minus":
            var result = parseInt(n1) - parseInt(n2);
            alert(result);
            break; 
        case "mal":
            var result = parseInt(n1) * parseInt(n2);
            alert(result);
            break;   
        case "dev":
            var result = parseInt(n1) / parseInt(n2);
            alert(result);
            break;   
    }
}