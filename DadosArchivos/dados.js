jugar = function(){
    let valorDado = lanzarDado();
    cambiarTexto("lblNumero",valorDado);
    if(valorDado > 3){
        console.log("Es mayor a 3");
        console.log("Ganaste");
    } else {
        console.log("Es menor a 3");
        console.log("Estas de malas");
    }
}

lanzarDado = function() {
    let numero = parseInt(Math.random() * 6) + 1;
    return numero;
}