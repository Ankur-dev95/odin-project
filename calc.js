function get1(){
    screen += "1";
    return "1"
}
function get2(){
    screen += "2";
    return "2"
}
function get3(){
    screen += "3";
    return "3"
}function get4(){
    screen += "4";
    return "4"
}
function get5(){
    screen += "5";
    return "5"
}
function get6(){
    screen += "6";
    return "6"
}function get7(){
    screen += "7";
    return "7"
}function get8(){
    screen += "8";
    return "8"
}function get9(){
    screen += "9";
    return "9"
}
function get0(){
    screen += "0";
    return "0"
}
let screen = "";
let v = document.querySelector(".screen1");
v.textContent = screen;
function getFirstNum(){
    ///when you press a opperator use this function 

    num1 = screen;
    screen = ";"

}
function getSecondNum(){
    while(sign != "+" || "-" || "*" || "*" ){

        num1 = screen;

        

    } 
    screen = ""

}

var num1 = "";
var num2 = "";
var sign = "";

function operate(firstNum,operater, secondNum){
    
    if (operater === "+"){
        return parseInt(firstNum) + parseInt(secondNum);

    }
    if (operater === "-"){
        return parseInt(firstNum) - parseInt(secondNum);

    }
    if (operater === "*"){
        return parseInt(firstNum) * parseInt(secondNum);

    }
    if (operater === "/"){
        return parseInt(firstNum) / parseInt(secondNum);

    }
    
    


}