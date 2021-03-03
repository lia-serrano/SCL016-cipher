import cipher from './cipher.js';

console.log(cipher);
//para cargar la pagina 1
window.onload = function () {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
};
//para mostrar la pagina 2
let itworks = document.querySelector(".pregunta")
itworks.addEventListener('click', mostrar)
function mostrar() {
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'block'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'none'
}
//para volver de pag 2 y mostrar la pagina 1
let return1 = document.querySelector("#volver1")
return1.addEventListener('click', ocultar)
function ocultar() {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'block'
}
//Boton meditar al hacer click nos lleva a la pagina 3.
let meditate = document.querySelector("#meditar")
meditate.addEventListener('click', mostrar1)
function mostrar1() {
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
    //variable para llamar la funcion de cifrar desde cipher.js(texto cifrado)
    let newtext = cipher.encode(text, number)
    console.log(newtext)
    //variable para mostrar texto cifrado en segunda pag.
    let answer = document.getElementById("respuesta")
    answer.value = newtext

    //let secretnumber = document.getElementById("respuesta")
   // secretnumber.value = `newtextTu paz es:secretnumber`
}
//para volver de pag 3 y mostrar la pagina 1
let return2 = document.querySelector("#volver2")
return2.addEventListener('click', ocultar2)
function ocultar2() {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'block'
}
//Boton meditar al hacer click nos lleva a la pagina 3.
let dontmeditate = document.querySelector("#noMeditar")
dontmeditate.addEventListener('click', mostrar3)
function mostrar3() {
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'block'
    document.querySelector('#instrucciones').style.display = 'none'
    //variable para guardar el texto
    let text2 = document.getElementById("mensaje").value
    console.log(text2)
    //variable para guardar el numero
    let number2 = document.getElementById("paz").value
    console.log(number2)
    //variable para llamar la funcion de decifrar desde cipher.js(texto decifrado)
    let newtext2 = cipher.decode(text2, number2)
    console.log(newtext2)
    //variable para mostrar texto decifrado en segunda pag.
    let theend2 = document.getElementById("respuesta")
    theend2.value = newtext2
    }
    

