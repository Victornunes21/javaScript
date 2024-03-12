
var N1 = document.querySelector("#N1")
var N2 = document.querySelector("#N2")
var Resultado = document.querySelector("span")

function Somar(){
    Resultado.innerHTML = parseInt(N1.value) + parseInt(N2.value)
}
function Subtrair(){
    Resultado.innerHTML = parseInt(N1.value) - parseInt(N2.value)
}
function Multiplicar(){
    Resultado.innerHTML = parseInt(N1.value) * parseInt(N2.value)
}
function Dividir(){
    Resultado.innerHTML = parseInt(N1.value) / parseInt(N2.value)
}
