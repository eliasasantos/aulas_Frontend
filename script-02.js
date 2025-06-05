function soma(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a + b;
  //document.getElementById('demo').innerHTML = parseInt(a) + parseInt(b);
  document.getElementById('demo').innerHTML = parseInt(a) + parseInt(b);
}

function subtração(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a - b;
}

function multiplicação(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a * b;
}
  
function divisão(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a / b;
}

function potenciação(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a ** b;
}
