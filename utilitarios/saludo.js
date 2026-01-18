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
    //mostrar imagen
    mostrarImagen("lblImagen", "img/rafa.gif")
    //cambiar caja de texto
    mostratTextoEnCaja("txtNombre", "")
}