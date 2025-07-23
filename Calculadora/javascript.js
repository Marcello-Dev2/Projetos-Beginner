function adiocionarCaracter(num){
    const res = document.querySelector(".res") .value

    document.querySelector(".res").value = res + num
}   
function limpaTela(){
    document.querySelector('.res').value = ""
}
function calcular(){
     const res = document.querySelector(".res") .value 

    document.querySelector(".res").value = eval(res) 
}
function inverterN(){
     const res = document.querySelector(".res").value

     document.querySelector(".res").value = res * -1 
}