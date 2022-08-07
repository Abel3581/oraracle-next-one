/*const name = "Champiñón"
console.log(/^[a-zA-Z]+$/.test(name)) // false
console.log(/^[a-zA-Z\u00C0-\u017F]+$/.test(name)) // true*/


var ingresandoPalabra = document.querySelector("#texto");

function encriptar(){
    var palabraIngresada = ingresandoPalabra.value;
    var caja = "";

    for(var i = 0; i < palabraIngresada.length; i++){
        if(palabraIngresada[i] < 'a' || palabraIngresada > 'z'){
            document.querySelector("#warning").style.color = "red";
            document.querySelector("#warning").style.fontSize = "16px";
            return;
        }
    }
}
var bEncriptar = document.querySelector("#enc");
bEncriptar.addEventListener("click",encriptar);




