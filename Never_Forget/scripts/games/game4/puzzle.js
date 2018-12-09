
document.addEventListener("DOMContentLoaded", function(){
    shuffle();
}, false);

function swap(tile1, tile2){
    var aux = document.getElementById(tile1).className;
    console.log(aux); 
    document.getElementById(tile1).className= document.getElementById(tile2).className;
    console.log(tile1);
    document.getElementById(tile2).className = aux;
    console.log(tile2);
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
}

//para saber si el juego se ha completado con exito mirare en cada div la class que tiene y si coincide con la que deberia de tener ya que lo unico que hace el puzzle es cambiar la clase de div en div.

// function checksolved(){
//     var solved= false;
//     for(var row=1; row<=3; row++){
//         for(var column=1;column<=3;column++){
//             for(var aux=1; aux<=9; aux++){
//                 if(document.getElementById("cell"+row+column).id ==  ){

//                 }
//             }

//         }
//     }
// }