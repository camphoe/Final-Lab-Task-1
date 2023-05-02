function addNumbers()
{
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    sum = parseInt (num1) + parseInt (num2);
    document.getElementById("result").value = sum;
}

function subtractNumbers()
{
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    diff = parseInt (num1) - parseInt (num2);
    document.getElementById("result").value = diff;
}

function multiplyNumbers()
{
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    prod = parseInt (num1) * parseInt (num2);
    document.getElementById("result").value = prod;
}

function divideNumbers()
{
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    prod = parseInt (num1) / parseInt (num2);
    document.getElementById("result").value = prod;
}

function clearFields()
{
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("result").value = "";
}

