var countDownDate = new Date("Oct 20, 2021 14:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML =  days;
  document.getElementById("hours").innerHTML =  hours;
  document.getElementById("minutes").innerHTML =  minutes;
  document.getElementById("seconds").innerHTML =  seconds;
  // aqui añadimos nuestra funcion, para que se segun 
  // el conteo regresivo anime los circulos
  effectCircle(days, hours, minutes, seconds);
}, 1000);
effectCircle = function(d, h, m, s){
    // valores maximos
    const max_sec = 60;
    const max_min = 60;
    const max_hour = 24;
    const max_day = 30;
    // valor del relleno del contorno
    // ojo es el mismo establecido en la hoja de estilos
    const strokeDashoffset = 439; 
    var circleSVG = document.getElementsByClassName('outer');
    // circulo dias
    var valPerDay = strokeDashoffset / max_day; // el valor de cada periodo segun la longitud del circulo
    var size = strokeDashoffset - (valPerDay * d); // restamos el valor del periodo a la longitud del circulo
    circleSVG[0].style.strokeDashoffset = size; // establemos nuevo valor al la longitud del circulo
    // circulo horas
    var valPerHour = strokeDashoffset / max_hour;
    var size = strokeDashoffset - (valPerHour * h);
    circleSVG[1].style.strokeDashoffset = size;
    // circulo minutos
    var valPerMin = strokeDashoffset / max_min;
    var size = strokeDashoffset - (valPerMin * m);
    circleSVG[2].style.strokeDashoffset = size;
    // circulo segundos
    var valPerSecond = strokeDashoffset / max_sec;
    var size = strokeDashoffset - (valPerSecond * s);
    circleSVG[3].style.strokeDashoffset = size;
}

// contador

var clicks = 0;

function clickM1() {
  clicks += 1;
  document.getElementById("clicks").value = clicks;
  document.getElementById("bote").value = "0";
}

function clickME1() {
  if (clicks > 0) clicks -= 1;
  document.getElementById("clicks").value = clicks;
}

var clicks2 = 0;

function clickM2() {
  clicks2 += 1;
  document.getElementById("clicks2").value = clicks2;
  document.getElementById("bote2").value = "0"; 
}

function clickME2() {
  if (clicks2 > 0) clicks -= 1; 
  document.getElementById("clicks2").value = clicks;
}


var clicks3 = 0;

function clickM3() {
  clicks3 += 1;
  document.getElementById("clicks3").value = clicks3;
  document.getElementById("bote3").value = "0"; 
}

function clickME3() {
  if (clicks3 > 0) clicks -= 1; 
  document.getElementById("clicks3").value = clicks; 
}
