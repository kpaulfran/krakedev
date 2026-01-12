recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.ariaValueMax;
}

saludar = function(){
    //recuperar valor de caja de texto
    let nombre = recuperarTexto("txtNombre");
    //recuperar el apellido
    let apellido = recuperarTexto("txtApellido");
}