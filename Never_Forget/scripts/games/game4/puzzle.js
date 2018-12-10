
// document.addEventListener("DOMContentLoaded", function(){
//     shuffle();
//     var tiempo=setTimeout('saludo()',300000);
//     finish();
// }, false);

var intentos=-9;
n=0;
window.setInterval(function(){
    document.getElementById('tiempo').innerHTML = n;
    n++;
},1000);

function swap(tile1, tile2){
    var aux = document.getElementById(tile1).className;
    console.log(aux); 
    document.getElementById(tile1).className= document.getElementById(tile2).className;
    console.log(tile1);
    document.getElementById(tile2).className = aux;
    console.log(tile2);

    if(checksolved()==true){
        alert("Completado");
        document.getElementById(cell33).className= "Complete";
        console.log(document.getElementById(cell33).className);
    }
    contador();
    
}

function shuffle(){

    for(var row=1; row<=3; row++){
        for(var column = 1; column <=3; column++){

            var randomRow=Math.floor(Math.random()*(4 - 1))+ 1;
            var randomColumn=Math.floor(Math.random()*3 + 1);
            swap("cell"+row+column, "cell"+randomRow+randomColumn);
        }
    }
}


function changeTile(row,column){

    var tile= document.getElementById("cell"+row+column);
    
    if (tile.className != "cell9"){
      
        if(column<3){
          
            if(document.getElementById("cell"+row+(column+1)).className=="cell9"){
                swap("cell"+row+column, "cell"+row+(column+1));
            }
        }
        if(column>1){
         
            if(document.getElementById("cell"+row+(column-1)).className=="cell9"){
                swap("cell"+row+column, "cell"+row+(column-1));
            }
        }
        if(row>1){
            if(document.getElementById("cell"+(row-1)+column).className=="cell9"){
                swap("cell"+row+column, "cell"+(row-1)+column);
            }
        }
        if(row<3){
            if(document.getElementById("cell"+(row+1)+column).className=="cell9"){
                swap("cell"+row+column, "cell"+(row+1)+column);
            }
        }
    }
    
    document.getElementById('contador').innerHTML = intentos;
    

    finish();
    
}


function finish(){
    if(intentos >20){
        alert("fin");
    }
}

function saludo()
{
    alert("Se ha acabado el tiempo");
}

function checksolved(){
    var contador=1;
    var solved=true;
    
    for(var row=1; row<=3; row++){
        for(var column=1;column<=3;column++){
            
                if(document.getElementById("cell"+row+column).className!="cell"+contador){
                    solved=false;
                }
                contador++;
        }
    }
    return solved;
}

function contador(){

    intentos++;

}

