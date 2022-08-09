

let borrar = document.querySelector("#default");
let area_result = document.querySelector("#result");
let texto_out = document.querySelector("#texto_out");


function encriptar(){
    document.querySelector("#advertencia").removeAttribute("style");
    let palabra = document.querySelector("#texto");
    let palabraIngresada = palabra.value;
    
    if(palabraIngresada != ""){

        for(let i = 0; i < palabraIngresada.length; i++){
            if(((palabraIngresada[i] < 'a' || palabraIngresada[i] > 'z')) && (palabraIngresada[i] != ' ')){
                document.querySelector("#advertencia").style.color = "red";
                document.querySelector("#advertencia").style.fontSize = "16px";
                return;
            }
            else if((palabraIngresada.length == 1 && palabraIngresada == " ") || palabraIngresada.replace(/ /g, "") == ""){
                borrar.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
          
        } 

        var palabraCodificada = palabraIngresada.replace (/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
        borrar.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = palabraCodificada;
    }
    return;
}

function desencriptar(){
    let palabra = document.querySelector("#texto");
    let palabraEncriptada = palabra.value;
    palabraEncriptada = palabraEncriptada.replace ( /ai/g , "a");
    palabraEncriptada = palabraEncriptada.replace (/enter/g , "e");
    palabraEncriptada = palabraEncriptada.replace (/imes/g , "i");
    palabraEncriptada = palabraEncriptada.replace (/ober/g , "o");
    palabraEncriptada = palabraEncriptada.replace (/ufat/g , "u"); 
    if(palabraEncriptada != ""){
        borrar.classList.add("invisible");
        area_result.classList.remove("invisible");
    }
    texto_out.innerHTML = palabraEncriptada;

}

function copy(){

    var resultado = document.getElementById("texto_out").select();
    document.execCommand('copy');
    alert("copiado");
}


var btnCopy = document.getElementById("copiar").addEventListener("click", copy);

const enc = document.querySelector('#enc');
enc.addEventListener( 'click', function() {encriptar();});

var des = document.querySelector("#des");
des.addEventListener('click',  function(){desencriptar()});





