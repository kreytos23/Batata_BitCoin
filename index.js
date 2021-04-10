var gray_arrow_left = document.getElementById("left-gray-arrow");
var gray_arrow_right = document.getElementById("right-gray-arrow");
var plans_container = document.getElementById("plans-slider");

//las tarjetas de planes porque necesito saber su tamaño, y este puede variar
var plans_card = document.getElementsByClassName("plans-container--card");
//averiguo el tamaño de las tarjetas, esta es la posicion central donde deberia emepezar
var size = plans_card[1].clientWidth;

//Para que la cajita del centro se muestre por default
plans_container.scrollLeft = size;

gray_arrow_left.addEventListener("click", function(){
    gray_arrow_right.style.display = "inline-block";
    //Le resto el tamaño de las tarjetas  a la posicion del scroll para mover a la izquierda
    plans_container.scrollLeft -= size;
    //Si se encuentra en la primera tarjeta deberia esconder la flecha izquierda,
    // pues porque ya no puede seguir llendo a la izquierda :P
    if(plans_container.scrollLeft <= size*2){
        // gray_arrow_left.style.display = "none";
    }
});

gray_arrow_right.addEventListener("click", function(){
    gray_arrow_left.style.display = "inline-block";
    plans_container.scrollLeft += size;
    if(plans_container.scrollLeft >= size){
        // gray_arrow_right.style.display = "none";
    }
});