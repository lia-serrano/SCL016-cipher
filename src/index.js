import cipher from './cipher.js';

console.log(cipher);

window.onload = function() {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
  };

let funciona = document.querySelector(".pregunta")
funciona.addEventListener('click', mostrar)
function mostrar() {
    console.log("escucho el click")
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'block'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'none'
}
var volver1 = document.querySelector("#volver1")
volver1.addEventListener('click', ocultar)
function ocultar() {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'block'
}
var meditar = document.querySelector("#meditar")
meditar.addEventListener('click', mostrar1)
function mostrar1() {
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'block'
    document.querySelector('#instrucciones').style.display = 'none'
}
var volver2 = document.querySelector("#volver2")
volver2.addEventListener('click', ocultar2)
function ocultar2() {
    document.querySelector('#pag1').style.display = 'block'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'none'
    document.querySelector('#instrucciones').style.display = 'block'
}
var noMeditar = document.querySelector("#noMeditar")
noMeditar.addEventListener('click', mostrar3)
function mostrar3() {
    document.querySelector('#pag1').style.display = 'none'
    document.querySelector('#pag2').style.display = 'none'
    document.querySelector('#pag3').style.display = 'block'
    document.querySelector('#instrucciones').style.display = 'none'
}
