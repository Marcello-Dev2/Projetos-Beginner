const horas = document.getElementById("horas");
const minuto = document.getElementById("min");
const segundo = document.getElementById("seg");


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if ( hr < 10) hr = "0" + hr;

    if ( min < 10) min = "0" + min;

    if( s < 10) s = '0' + s;

    horas.textContent = hr;
    minuto.textContent = min
    segundo.textContent = s 

})