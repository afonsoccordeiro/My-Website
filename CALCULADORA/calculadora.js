    //defini aqui duas variáveis
    //let n1,n2
// document (pasta), fui buscar o elemento "num1" que tem o seu valor
   // n1 = document.querySelector("#num1").value
   // n2 = document.querySelector("#num2").value


//ao fazer isto só o código junta os valores e não soma-os
    //alert(n1+n2)
   // por isso tenho que colocar "number" antes
   function operacao(operador) {
    const n1 = Number(document.querySelector("#num1").value)
    const n2 = Number(document.querySelector("#num2").value)
    let res = 0
//se o valor da varial é igual a "num1+num2"
if (operador == "+") {
    res = n1 + n2
} else if (operador) == "-" {
    res = n1 - n2
} else if (operador == "*") {
    res = n1 * n2
} else {
    if (n2 == 0){
        alert ("Não pode dividir por zero!")
    } else {
        res = n1 / n2
        }
}
    alert (res)
