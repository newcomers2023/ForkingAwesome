function mod()
{
    document.getElementById("modtxt").innerHTML = "Was willst du?";
}
function len()
{
    var text = document.getElementById("text").value;
    if (text.length > 5)
    {
        alert("Erfolg! Sie haben es geschafft, mehr als 5 Tasten zu drücken!");
        return;
    }
    else
    {
        alert("Geben Sie mal etwas mehr ein");
        return;
    }
}
function add()
{
    var a = parseInt(document.getElementById("opa").value);
    var b = parseInt(document.getElementById("opb").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Input a number!");
        return;
    }
    document.getElementById("ans").innerHTML = a + b;
    return;
}
function sub()
{
    var a = parseInt(document.getElementById("opa").value);
    var b = parseInt(document.getElementById("opb").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Input a number!");
        return;
    }
    document.getElementById("ans").innerHTML = a - b;
    return;
}
function mul()
{
    var a = parseInt(document.getElementById("opa").value);
    var b = parseInt(document.getElementById("opb").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Input a number!");
        return;
    }
    document.getElementById("ans").innerHTML = a * b;
    return;
}
function div()
{
    var a = parseInt(document.getElementById("opa").value);
    var b = parseInt(document.getElementById("opb").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Input a number!");
        return;
    }
    document.getElementById("ans").innerHTML = a / b;
    return;
}

var num1 = "";
var num2 = "";
var flg = 0;
var opflg = 0;

function num(n)
{
    if(flg == 0)
    {
        num1 = num1 + n;
        document.getElementById("num").innerHTML = '[' + num1 + ']';
        return;
    }
    else
    {
        num2 = num2 + n;
        document.getElementById("num").innerHTML = '[' + num2 + ']';
        return;
    }
}

function operflg(n)
{
    opflg = n;
    flg = 1;
    document.getElementById("num").innerHTML = "[0]";
    return;
}

function calc()
{
    var ans = 0;
    if(flg == 0)
    {
        return;
    }    
    else
    {
        switch (opflg)
        {
            case 1:
                ans = parseFloat(num1) + parseFloat(num2);
                document.getElementById("num").innerHTML = '[' + ans + ']';
                break;
            case 2:
                ans = parseFloat(num1) - parseFloat(num2);
                document.getElementById("num").innerHTML = '[' + ans + ']';
                break;
            case 3:
                ans = parseFloat(num1) * parseFloat(num2);
                document.getElementById("num").innerHTML = '[' + ans + ']';
                break;
            case 4:
                ans = parseFloat(num1) / parseFloat(num2);
                document.getElementById("num").innerHTML = '[' + ans + ']';
                break;
                default:
                alert("Unexpected Error occured, refreshing page. \nError code: \"ERR_OPFLG_NOT_VALID\"");
                location.reload();
                break;
        }
        num1 = ans.toString;
    }
}

function rst()
{
    num1 = "";
    num2 = "";
    document.getElementById("num").innerHTML = "[0]";
    return;
}