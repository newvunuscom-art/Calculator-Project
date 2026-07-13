var oparators = ["+", "-", "/", "*"];

var box = null;
var last_oparation_history = null;
var oparator = null;
var equal = null;
var dot = null;

var firstNum = true;

var numbers = [];
var oparator_value;
var last_button;
var calc_oparator;

var total;

var key_combination =[]
var resultDisplayed = false;

function button_number (button){
    oparator = document.getElementsByClassName("oparator");
    box = document.getElementById("box");
    last_oparator_history = document.getElementById("last_oparator_history");
    equal = document.getElementById(equal_sign).value;
    dot = document.getElementById("dot").value;

    last_button = button;
    
}

