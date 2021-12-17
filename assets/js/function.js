
var toCompute = "";
var currentNumber = ""
var computedValue = 0;
var hasComputed = false;

/* Numbers */

function enterOne() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "1";
            toCompute += "1";
        } else {
            currentNumber = "1";
            toCompute = "1";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "1";
        toCompute = toCompute.slice(0, -1) + "1";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterTwo() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "2";
            toCompute += "2";
        } else {
            currentNumber = "2";
            toCompute = "2";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "2";
        toCompute = toCompute.slice(0, -1) + "2";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterThree() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "3";
            toCompute += "3";
        } else {
            currentNumber = "3";
            toCompute = "3";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "3";
        toCompute = toCompute.slice(0, -1) + "3";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterFour() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "4";
            toCompute += "4";
        } else {
            currentNumber = "4";
            toCompute = "4";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "4";
        toCompute = toCompute.slice(0, -1) + "4";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterFive() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "5";
            toCompute += "5";
        } else {
            currentNumber = "5";
            toCompute = "5";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "5";
        toCompute = toCompute.slice(0, -1) + "5";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterSix() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "6";
            toCompute += "6";
        } else {
            currentNumber = "6";
            toCompute = "6";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "6";
        toCompute = toCompute.slice(0, -1) + "6";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterSeven() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "7";
            toCompute += "7";
        } else {
            currentNumber = "7";
            toCompute = "7";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "7";
        toCompute = toCompute.slice(0, -1) + "7";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterEight() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "8";
            toCompute += "8";
        } else {
            currentNumber = "8";
            toCompute = "8";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "8";
        toCompute = toCompute.slice(0, -1) + "8";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterNine() {
    if (removeZero()) {
        if (!hasComputed) {
            currentNumber += "9";
            toCompute += "9";
        } else {
            currentNumber = "9";
            toCompute = "9";
            hasComputed = false;
        }
    } else {
        currentNumber = currentNumber.slice(0, -1) + "9";
        toCompute = toCompute.slice(0, -1) + "9";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterZero() {
    if (toCompute.substring(toCompute.length - 1, toCompute.length) != "0") {
        if (!hasComputed) {
            currentNumber += "0";
            toCompute += "0";
        } else {
            currentNumber = "0";
            toCompute = "0";
            hasComputed = false;
        }

        document.getElementById("to-compute").innerHTML = toCompute;
    }
}

function removeZero() {
    var secondLastChar = toCompute.substring(toCompute.length - 2, toCompute.length - 1);
    var toReturn = true;

    if (
        toCompute.substring(toCompute.length - 1, toCompute.length) == "0" && 
        (secondLastChar == "" || secondLastChar == " ")
    ) {
        toReturn = false;
    }

    return toReturn;
}

function enterDot() {
    var lastChar = toCompute.substring(toCompute.length - 1, toCompute.length);

    if (toCompute == "" || lastChar == " " || lastChar == "-") {
        currentNumber += "0.";
        toCompute += "0.";
    } else if (!currentNumber.includes(".")) {
        currentNumber += ".";
        toCompute += ".";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

/* Operations */

function enterPlus() {
    var lastChar = toCompute.substring(toCompute.length - 1, toCompute.length);

    if (toCompute == "" || lastChar == " " || lastChar == "-") {
        return;
    }

    if (!hasComputed) {
        toCompute += " + ";
    } else {
        toCompute = computedValue + " + ";
        hasComputed = false;
    }

    currentNumber = "";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterMinus() {
    var lastChar = toCompute.substring(toCompute.length - 1, toCompute.length);

    if (toCompute == "" || lastChar == " ") {
        toCompute += "-";
        currentNumber = "-";
    } else if (lastChar == "-") {
        return;
    } else {
        if (!hasComputed) {
            toCompute += " - ";
        } else {
            toCompute = computedValue + " - ";
            hasComputed = false;
        }
        
        currentNumber = "";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterTimes() {
    var lastChar = toCompute.substring(toCompute.length - 1, toCompute.length);

    if (toCompute == "" || lastChar == " " || lastChar == "-") {
        return;
    }

    if (!hasComputed) {
        toCompute += " * ";
    } else {
        toCompute = computedValue + " * ";
        hasComputed = false;
    }

    currentNumber = "";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function enterDivide() {
    var lastChar = toCompute.substring(toCompute.length - 1, toCompute.length);

    if (toCompute == "" || lastChar == " " || lastChar == "-") {
        return;
    }

    if (!hasComputed) {
        toCompute += " / ";
    } else {
        toCompute = computedValue + " / ";
        hasComputed = false;
    }

    currentNumber = "";
    document.getElementById("to-compute").innerHTML = toCompute;
}

function compute() {
    if (toCompute == "" || toCompute.substring(toCompute.length - 1, toCompute.length) == " ") {
        return;
    }

    computedValue = eval(toCompute);
    document.getElementById("output").innerHTML = computedValue;
    hasComputed = true;
}

/*  */

function deleteLast() {    
    if (toCompute.substring(toCompute.length - 1, toCompute.length) == " ") {
        toCompute = toCompute.slice(0, -3);
    } else {
        toCompute = toCompute.slice(0, -1);
        hasComputed = false;
    }

    var words = toCompute.split(" ");
    var lastWord = words[words.length - 1];

    if (lastWord != "+" || lastWord != "-" || lastWord != "*" || lastWord != "/") {
        currentNumber = lastWord;
    } else {
        currentNumber = "";
    }

    document.getElementById("to-compute").innerHTML = toCompute;
}

function clearAll() {
    toCompute = ""
    currentNumber = "";
    computedValue = 0;
    hasComputed = false;
    document.getElementById("to-compute").innerHTML = toCompute;
    document.getElementById("output").innerHTML = computedValue;
}