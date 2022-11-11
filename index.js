var numberA, numberB, operation;

function init() {
    // Vars
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var sum = document.getElementById("sum");
    var subtract = document.getElementById("subtract");
    var multiplication = document.getElementById("multiplication");
    var division = document.getElementById("division");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");
    var equals = document.getElementById("equals");

    // Events
    // Numbers
    one.onclick = function(e) {
        result.textContent += "1";
    }
    two.onclick = function(e) {
        result.textContent += "2";
    }
    three.onclick = function(e) {
        result.textContent += "3";
    }
    four.onclick = function(e) {
        result.textContent += "4";
    }
    five.onclick = function(e) {
        result.textContent += "5";
    }
    six.onclick = function(e) {
        result.textContent += "6";
    }
    seven.onclick = function(e) {
        result.textContent += "7";
    }
    eight.onclick = function(e) {
        result.textContent += "8";
    }
    nine.onclick = function(e) {
        result.textContent += "9";
    }
    zero.onclick = function(e) {
        result.textContent += "0";
    }

    // Operations
    reset.onclick = function(e) {
        resett();
    }
    sum.onclick = function(e) {
        numberA = result.textContent;
        operation = "+";
        clear();
    }
    subtract.onclick = function(e) {
        numberA = result.textContent;
        operation = "-";
        clear();
    }
    multiplication.onclick = function(e) {
        numberA = result.textContent;
        operation = "*";
        clear();
    }
    division.onclick = function(e) {
        numberA = result.textContent;
        operation = "/";
        clear();
    }
    equals.onclick = function(e) {
        numberB = result.textContent;
        resolv();
    }
}

function clear() {
    result.textContent = "";
}

function resett() {
    result.textContent = "";
    numberA = 0;
    numberB = 0;
    operation = "";
}

function resolv() {
    var res = 0;
    switch (operation) {
        case "+":
            res = parseInt(parseFloat(numberA) + parseFloat(numberB));
            break;
        case "-":
            res = parseInt(parseFloat(numberA) - parseFloat(numberB));
            break;
        case "*":
            res = parseInt(parseFloat(numberA) * parseFloat(numberB));
            break;
        case "/":
            res = parseInt(parseFloat(numberA) / parseFloat(numberB));
            break;
    }
    resett();
    result.textContent = res;
}