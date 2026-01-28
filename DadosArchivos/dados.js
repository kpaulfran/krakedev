jugar = function(){
    let valorDado = lanzarDado();
    cambiarTexto("lblNumero",valorDado);
    if(valorDado > 3){
        cambiarTexto("mensaje1","Es mayor a 3");
        cambiarTexto("mensaje2","Ganaste");
    } else {
        cambiarTexto("mensaje1","Es menor a 3");
        cambiarTexto("mensaje2","Estas de malas");
    }
}

lanzarDado = function() {
    let numero = parseInt(Math.random() * 6) + 1;
    return numero;
}