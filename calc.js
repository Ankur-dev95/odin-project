const oper = ["+", "-","*","/"];

function get1(){
    screen += "1";
    v.textContent = screen;
    
    return "1"
}
function get2(){
    screen += "2";
    v.textContent = screen;
    return "2"
}
function get3(){
    screen += "3";
    v.textContent = screen;
    return "3"
}function get4(){
    screen += "4";
    v.textContent = screen;
    return "4"
}
function get5(){
    screen += "5";
    v.textContent = screen;
    return "5"
}
function get6(){
    screen += "6";
    v.textContent = screen;
    return "6"
}function get7(){
    screen += "7";
    v.textContent = screen;
    return "7"
}function get8(){
    screen += "8";
    v.textContent = screen;
    return "8"
}function get9(){
    screen += "9";
    v.textContent = screen;
    return "9"
}
function get0(){
    screen += "0";
    v.textContent = screen;
    return "0"
}
function getDot(){
    screen += ".";
    v.textContent = screen;
    return "."
}
let screen = "";
let v = document.querySelector(".screen1");
let storeScreen ="";
v.textContent = screen;
function getFirstNum(){
    ///when you press a opperator use this function 

    num1 = screen;
    
    storeScreen += sign;
    screen = ""

}
function getSecondNum(){
    num2 = screen;
    storeScreen += screen;

    screen = "";

}
function clearEverything(){
    num1 ="";
    num2 = "";
    sign = "";
    screen = "";
    v.textContent = screen;
}
var num1 = "";
var num2 = "";
var sign = "";

function operate(firstNum,operater, secondNum){
    
    if (operater === "+"){
        
        return parseFloat(firstNum) + parseInt(secondNum);

    }
    if (operater === "-"){
        return parseFloat(firstNum) - parseInt(secondNum);

    }
    if (operater === "*"){
        return parseFloat(firstNum) * parseInt(secondNum);

    }
    if (operater === "/"){
        return parseFloat(firstNum) / parseInt(secondNum);

    }
    
    num1 = "";
    num2 = "";
    sign = "";
    


}