const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const relogio = setInterval(function line() {
    let dataHoje = new Date();
    let hora = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let sec = dataHoje.getSeconds();

    if(hora < 10) hr = '0' + hora;

    if(min < 10) min = '0' + min;

    if(sec < 10) sec = '0' + sec;

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;
})