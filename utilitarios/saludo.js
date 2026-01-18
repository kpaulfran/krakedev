recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    return valorIngresado = componente.value;
}

recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

mostrarTexto = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

saludar = function(){
    //recuperar valor de caja de texto
    let nombre = recuperarTexto("txtNombre");
    //recuperar el apellido
    let apellido = recuperarTexto("txtApellido");
    //recuperar edad
    let edad = recuperarInt("txtEdad");
    //recuperar estatura
    let estatura = recuperarFloat("txtEstatura");
    //mostrar mensaje
    let mensajeBienvenida = "Bienvenido "+ nombre + " " + apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);
}