///////VARIABLES///////

// Array de palabras
var palabras = [["Lluis Companys", "Expresident of the Generalitat of Catalunya."], ["Civil War", "Conflict ocurred in Spain between 1936 and 1939."], ["Bombing on population", "Happened in Barcelona during those days."]];
// Palabra a averiguar
var palabra = "";
// Nº aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento html de la palabra
var hueco = document.getElementById("palabra");
// Contador de intentos
var cont = 6;
// Botones de letras
var buttons = document.getElementsByClassName('letra');
// Boton de siguiente
var btnNext = document.getElementById("siguiente");
//Boton de continuar con el siguiente enigma
var btnContinuar = document.getElementById("continuar");
// Numero de palabra la cual queremos averiguar. Este nuemro hace referencia a la posicion del array palabras
var numPalabra = checkCookie("numParaula");
//Boton que da una pista sobre la palabra
var btnPista = document.getElementById("pista");
//Variable que indica los segundos transcurridos des de que ha cargado la pagina
var segundos = 0;
//Boleano para no volver amostrar el alert si ya se ha mostrado anteriormente
var mostrado = false;



///////FUNCIONES///////

// Escoger palabra
function generaPalabra() {
  //Esta funcion escoje la palabra que se pondra en juego
  palabra = palabras[numPalabra][0].toUpperCase();
}

// Funcion para pintar los guiones de la palabra
function pintarGuiones(palabra) {
  for (var i = 0; i < palabra.length; i++) {
    if(palabra[i] != " "){
      oculta[i] = "_";
    }
    else{
      oculta[i] = " ";
    }
  }

  //Juntamos el array de la palabra oculta(guiones) en un string y lo mostramos en el hueco de la palabra oculta
  //que hay en el html. Utilizamos 'join("")' por que por defecto el separador de esta funcion es la coma (,) y 
  //nosotros lo queremos en blanco (nada).
  hueco.innerHTML = oculta.join("");
}

//Generar abecedario. Le pasamos los parametros a y z como principio y final. esto dependera que tan amplio lo queramos hacer
function generaABC (a,z) {
  //Iniciamos el espacio html del abecedario en blanco para despues ir añadiendo las letras
  document.getElementById("abcdario").innerHTML = "";

  //Damos valor del codigo de caracter a la i y la j de la a y la z respectivamente
  var i = a.charCodeAt(0), j = z.charCodeAt(0);

  //Declaramos la variable letra
  var letra = "";

  //Bucle que ira desde la a a la z pero utilizando el codigo de caracter de la tabla ASCII
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    //Por cada letra generamos un boton html con sus atributos y clases pertinentes
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra btn btn-abc' id='"+letra+"'>" + letra + "</button>";
    /* El siguiente codigo es por si queremos añadir la letra Ñ en el abecedario, ya que en el ascii no esta entre la a y la z
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    }*/
  }
}

//Chequear intento
function intento(letra) {
  //Deshabilitamos la letra del abecedario por que ya hemos hecho clic en ella, para no poder hacer clic mas veces
  document.getElementById(letra).disabled = true;


  //El método indexOf () devuelve la posición de la primera aparición de un valor especificado en una cadena.
  //Este método devuelve -1 si el valor para buscar nunca ocurre.
  //En este caso si devuleve algo diferente a -1, significa que la letra si esta en la palabra como minimo 1 vez
  if(palabra.indexOf(letra) != -1) {
    //Recorremos la palabra original y donde coincida la letra de la palabra con la letra clicada, substituimos esa letra
    //pero en la posicion de la palabra oculta
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra){
        oculta[i] = letra;
      } 
    }

    //"Actualizamos" la palabra, ya que se habran substituido los guiones por la letra acertada
    hueco.innerHTML = oculta.join("");

    //Animación si esta bien
    //document.getElementById("acierto").innerHTML = "Good!";
    //document.getElementById("acierto").className += "acierto verde";
  }else{
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Wrong!";

    //Animación si esta mal//
    document.getElementById("acierto").className += "acierto rojo";
    //"Hacemos" visible la siguiente imagen del ahorcado
    document.getElementById("image"+cont).className += "fade-in";
  }
  //Esperamos un rato para reiniciar las clases del h3 con el id acierto. Hacemos esto para dar tiempo a que se ejecute
  //toda la animacion
  setTimeout(function () { document.getElementById("acierto").className = ""; }, 1000);

  compruebaFin();

  if(cont == 2 && btnPista.disabled == false && mostrado == false){
    mostrarModalPista('Te quedan pocos intentos, hacer click en "Dame una pista" te ayudará a resolverlo.');
    mostrado = true;
  }
}

// Obtener pista
function pista() {
  document.getElementById("hueco-pista").innerHTML = palabras[numPalabra][1];
  btnPista.disabled = true;
}

//Muestra un modal al usuario si se detecta que va un poco perdido
function mostrarModalPista(mensaje){
  $('#modalPista').modal();
  $('#modalPista').find('.modal-body').text(mensaje);
}

//Muestra un modal al usuario si clica al boton de ayuda. Se le mostraran las instrucciones del juego
function mostrarModalAyuda(){
  $('#modalAyuda').modal({
    backdrop: false
  });
  //$('.modal-backdrop').removeClass("modal-backdrop"); 
}

// Compruba si ha finalizado
function compruebaFin() {
  //Si ya no hay guiones, es decir, se ha completado toda la palabra
  if( oculta.indexOf("_") == -1 ) {
    if(numPalabra==2){
      document.getElementById("msg-final").innerHTML = "You are free!";
    }
    
    document.getElementById("msg-final").className += "zoom-in";
    //document.getElementById("palabra").className += " encuadre";

    //Deshabilitamos todos los botones del abecedario
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    //incrementamos en 1 el numero de la palabra para cargar la siguiente
    numPalabra++;

    //Si ya se han completado con exito las 3 palabras, se muestra el boton de continuar para ir al siguiente enigma
    if(numPalabra > 2){
      btnNext.style.display = 'none';
      btnContinuar.style.display = 'inline';
    }
    //Guardamos la posicion de la palabra en el array en una cookie para no perder la variable al hacer reload
    setCookie("numParaula", numPalabra, 2);
    btnNext.disabled=false;
    btnNext.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    
    btnNext.innerHTML = "Empezar";
    btnNext.disabled=false;
    btnNext.style.display = 'inline';
    btnPista.disabled=true;
    btnNext.onclick = function () { location.reload() };
  }
}

//Si el jugador pierde se le muestra la palabra
function mostrarPalabra(){
  
}

// Restablecer juego
function inicio() {
  generaPalabra();
  pintarGuiones(palabra);
  generaABC("a","z");
  cont = 6;
  document.getElementById("intentos").innerHTML=cont;
  btnNext.disabled=true;
  btnPista.disabled=false;
}

//Siguiente palabra
function siguiente(){
  inicio();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

//Esta funcion comprueba si la cookie que le decimos existe. Si existe nos devuelve el valor que tiene.
//Si no existe, nos interesa que devuelva 0
function checkCookie(claveCookie) {
  var nivell = getCookie(claveCookie);
  if (nivell != "") {
    return nivell;
  } else {
    return 0;
  }
}

function sumarSegundo(){
  segundos++;
  if(segundos == 90 && btnPista.disabled == false){
    mostrarModalPista('Llevas bastane tiempo en el enigma, hacer click en "Dame una pista" te ayudará a resolverlo.');
  }
}

setInterval(sumarSegundo, 1000);

//Iniciar
window.onload = inicio();





