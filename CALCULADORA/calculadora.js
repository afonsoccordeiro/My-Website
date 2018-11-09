function sum() {
    //defini aqui duas variáveis
    let n1,n2
// document (pasta), fui buscar o elemento "num1" que tem o seu valor
   // n1 = document.querySelector("#num1").value
   // n2 = document.querySelector("#num2").value


//ao fazer isto só o código junta os valores e não soma-os
    //alert(n1+n2)
   // por isso tenho que colocar "number" antes
    
    n1 = Number(document.querySelector("#num1").value)
    n2 = Number(document.querySelector("#num2").value)

    alert(n1*n2)
}