var operators = ["+", "-", "/", "*"];

var box = null;
var last_operation_history = null;
var operator = null;
var equal = null;
var dot = null;

var firstNum = true;

var numbers = [];
var operator_value;
var last_button;
var calc_operator;

var total;

var key_combination =[]
var resultDisplayed = false;

function button_number (button){
    operator = document.getElementsByClassName("operator");
    box = document.getElementById("box");
    last_operator_history = document.getElementById("last_operator_history");
    equal = document.getElementById(equal_sign).value;
    dot = document.getElementById("dot").value;

    last_button = button;

    if (resultDisplayed && !operators.includes(button) && button != equal) {
        numbers = [];
        operator_value = null;
        calc_operator = null;
        firstNum = false;
        last_operator = null;
        // show the pressed number; if dot, prefix with 0.
        if (button == dot) {
            box.innerText = "0" + dot;
        } else {
            box.innerText = button;
        }
        resultDisplayed = false;
        return;
    }

    if (!operators.includes(button) && button != equal) {
        if (firstNum) {
            // and it's a dot, show 0.
            if (button == dot) {
                box.innerText = "0" + dot;
            }
            else {
                box.innerText = button;
            }
            firstNum = false;
        } else {
            if (box.innerText.length == 1 && box.innerText == 0) {
                if (button == dot) {
                    box.innerText += button;
                }
                return;
            }
            if (box.innerText.includes(dot) && button == dot) {
                return;
            }
            if (box.innerText.length == 20) {
                return;
            }
            if (button == dot && box.innerText == "-") {
                box.innerText = "-0" + dot;
            }else {
                box.innerText += button;
            }
        }
        resultDisplayed = false;
    }


else {

    if(operator_value != null && button == operator_value){
        return;
    }

    if(button == "-" && box.innerText == 0) {
        box.innerText = button;
        firstNum = false;
        operator_value = button;
        showSelectOperator();
        return;
    }
    else if (operators.includes(button) && box.innerText == "-") {
        return;
    }
    else if (button == "-" && operator_value == "-" && last_operation_history.innerText.includes("=")){
        return;
    }

    if (operators.includes(button)) {
        if (typeof last_operator != "undefined" && last_operator != null) {
            calc_operator = last_operator
        } else {
            calc_operator = button;
        }
        if (button == "*") {
            last_button = "×";
        }else if (button == "/") {
            last_operator ="÷";
        } else {
            last_operator = button;
        }
        operator_value = button ;
        firstNum = true;
        showSelectOperator();
        resultDisplayed = false;
    }

    if (numbers.length ==1) {
        numbers[1] = box.innerText;
    }
    var temp_num = box.innerText;

    if (buton == equal && calc_operator != null) {
        var total = calculate(numbers[0], numbers[1], calc_operator);
        box.innerText = total;

    if (!last_operator_history.innerText.includes("=")) {
        last_operator_history.innerText += "" + numbers[1] + "=";
    }

    temp_num = numbers[0];

    numbers[0] = tatal ;
    operator_value = null ;
    showSelectOperator();

    var history_arr = last_operation_history.innerText.split(" ");
    history_arr[0] = temp_num;
    last_operation_history.innerText = history_arr.join(" ");

    resultDisplayed = true;
    }
    else if (calc_operator != null) {
        last_operation_history.innerText = temp_num + " " + last_operator;
        calc_operator = button;
        numbers = [];
        numbers.push(box.innerText);

        resultDisplayed = false;
        }
    
    }
}

console.log(operators);