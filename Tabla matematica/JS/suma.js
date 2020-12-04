"use strict"

var numero1 = parseFloat(prompt("Ingrese un numero: "));
var numero2 = parseFloat(prompt("Ingrese otro numero: "));

console.log(numero1);
console.log(numero2);

function funcion(){
    document.getElementById("numero1").innerHTML = numero1;
    document.getElementById("numero2").innerHTML = numero2;
    document.getElementById("suma").innerHTML = numero1+numero2;
    document.getElementById("resta").innerHTML = numero1-numero2;
}