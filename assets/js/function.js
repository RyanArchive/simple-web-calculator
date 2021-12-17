
var toCompute = "";
var currentNumber = ""

/* Numbers */

function enterOne() {
    currentNumber += "1";
    toCompute += "1";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterTwo() {
    currentNumber += "2";
    toCompute += "2";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterThree() {
    currentNumber += "3";
    toCompute += "3";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterFour() {
    currentNumber += "4";
    toCompute += "4";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterFive() {
    currentNumber += "5";
    toCompute += "5";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterSix() {
    currentNumber += "6";
    toCompute += "6";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterSeven() {
    currentNumber += "7";
    toCompute += "7";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterEight() {
    currentNumber += "8";
    toCompute += "8";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterNine() {
    currentNumber += "9";
    toCompute += "9";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterZero() {
    currentNumber += "0";
    toCompute += "0";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterDot() {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        toCompute += ".";
        document.getElementById("to-compute").innerHTML = toCompute;
    }
}

/* Operations */

function enterPlus() {
    currentNumber = "";
    toCompute += " + ";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterMinus() {
    currentNumber = "";
    toCompute += " - ";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterTimes() {
    currentNumber = "";
    toCompute += " * ";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterDivide() {
    currentNumber = "";
    toCompute += " / ";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function compute() {
    var computedValue = eval(toCompute);
    document.getElementById("output").innerHTML = computedValue;
}

/*  */

function deleteLast() {
    currentNumber = toCompute.slice(0, -1);
    
    if (toCompute.substring(toCompute.length - 1, toCompute.length) == " ") {
        toCompute = toCompute.slice(0, -3);
    } else {
        toCompute = toCompute.slice(0, -1);
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function clearAll() {
    currentNumber = "";
    toCompute = ""
    document.getElementById("to-compute").innerHTML = toCompute;
    document.getElementById("output").innerHTML = "0";
}