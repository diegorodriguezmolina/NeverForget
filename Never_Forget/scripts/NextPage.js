var ciudad="Barcelona";
var text="";
document.getElementById("text").innerHTML=text;
document.getElementById("resultado").innerHTML=ciudad;
function apretaboton(){
  var ciudad="Madrid";
  document.getElementById("resultado").innerHTML=ciudad;
  text = "Al tener una variable local dentro de la función, que se ejecuta al pulsar el boton, nos muestra es el valor de la variable local que es Madrid.";
  document.getElementById("exp").innerHTML=text;
	
  }