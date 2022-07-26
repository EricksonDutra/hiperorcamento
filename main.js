const transf = 330.00
const vistoria = 200.00
const grav = 235.00
const honorario = 120.00
const despesa = 50.00
const placa = 200.00
let total = 0.0

result = document.querySelector('.soma')
htmlTemp = result.innerHTML


var vistB = document.getElementById('vistB')
var transfB = document.getElementById('transfB')
var gravB = document.getElementById('gravB')
var honB = document.getElementById('honB')
let outroB = document.getElementById('outroB')
let descB = document.getElementById('descB')
let placaB = document.getElementById('placaB')

function sub(){
    if(transfB.checked){
        total = total + transf
    }
    if (vistB.checked){
        total = total + vistoria
    }
    if (gravB.checked){
        total = total + grav
    }
    if (honB.checked){
        total = total + honorario
    }
    if (despesaB.checked){
        total = total + despesa
    }  
    if (placaB.checked){
        total = total + placa
    }
    if (outroB.checked){
        let outrovalor = document.getElementById('v-outro').value
        outrovalor = parseFloat(outrovalor)
        total = total + outrovalor
    }
    if (descB.checked){
        let desconto = document.getElementById('desc').value
        total = total - desconto
    }
    result.innerHTML = `<center><h2> Total: ${total.toFixed(2)}  R$</h2></center>`
    total = 0
}

function clean() {
    total = 0
    result.innerHTML = `<center><h2> Total: ${total.toFixed(2)} R$</h2></center>`
}