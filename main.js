const transf = 330.00
const vistoria = 200.00
const grav = 230.00
const honorario = 120.00
let total = 0.0

result = document.querySelector('.soma')
htmlTemp = result.innerHTML


var vistB = document.getElementById('vistB')
var transfB = document.getElementById('transfB')
var gravB = document.getElementById('gravB')
var honB = document.getElementById('honB')

function sub(){
    if(transfB.checked){
        // console.log('valor verdadeiro')
        // console.log(total)
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
    result.innerHTML = `<center><h2> Total: ${total.toFixed(2)}</h2></center>`
}
result.innerHTML = 0
// function soma (){
//     return total
// }