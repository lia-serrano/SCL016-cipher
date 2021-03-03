import cipher from './cipher.js';

console.log(cipher);

window.onload = function () {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
};

let itworks = document.querySelector(".pregunta")
itworks.addEventListener('click', mostrar)
function mostrar() {
    console.log("escucho el click")
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'block'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'none'
}
let return1 = document.querySelector("#volver1")
return1.addEventListener('click', ocultar)
function ocultar() {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'block'
}
let meditate = document.querySelector("#meditar")
meditate.addEventListener('click', mostrar1)
function mostrar1() {
    //Boton meditar al hacer click nos lleva a la sgte pag.
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'block'
    document.querySelector('#instrucciones').style.display = 'none'
    //variable para guardar el texto
    let text = document.getElementById("mensaje").value
    console.log(text)
    //variable para guardar el numero
    let number = document.getElementById("paz").value
    console.log(number)
    //let get2 = document.getElementById("respuesta").value
    //get2.value = get
    //variable para llamar la funcion de cifrar desde cipher.js)
    let newtext = cipher.encode(text,number)
    console.log(newtext)
    document.getElementById("respuesta")
    //
    //var get = document.getElementById("mensaje")
    //get.addEventListener('escribir', pasarValor)
   // function pasarValor() {
     //   document.getElementById("mensaje").value = document.getElementById("respuesta").value;
    }
    //pasarValor()

        //Obtener el numero de desplazamiento.
    //Llamar funcion para cifrar.
    //Boton meditar al hacer click debe mostrar mensaje cifrado en la sgte pag.
    //Obtener el valor de input cifrado y mostrarlo.

let return2 = document.querySelector("#volver2")
return2.addEventListener('click', ocultar2)
function ocultar2() {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'block'
}
let dontmeditate = document.querySelector("#noMeditar")
dontmeditate.addEventListener('click', mostrar3)
function mostrar3() {
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'block'
    document.querySelector('#instrucciones').style.display = 'none'
}

//let tex = document.getElementById('.respuesta');
//function copiar (){


