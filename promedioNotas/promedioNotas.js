function calcularPromedioNotas(notas) {
    let n1 = recuperarFloat("nota1");
    let n2 = recuperarFloat("nota2");
    let n3 = recuperarFloat("nota3");
    let promedio = calcularPromedio(n1, n2, n3);
    if (promedio < 5 && promedio > 0) {
        mostrarTexto("resultado",promedio.toFixed(2));
        mostrarTexto("mensajeResultado","Reprobado");
        mostrarImagen("imgResultado","tryAgain.gif");
    } else if(promedio >=5 && promedio <= 8){
        mostrarTexto("resultado",promedio.toFixed(2));
        mostrarTexto("mensajeResultado","Regular");
        mostrarImagen("imgResultado","regular.gif");
    } else if (promedio > 8 && promedio <= 10){
        mostrarTexto("resultado",promedio.toFixed(2));
        mostrarTexto("mensajeResultado","Excelente Aprobado");
        mostrarImagen("imgResultado","congrats.gif");
    } else {
        mostrarTexto("mensajeResultado","Ingrese valores correctos");
        mostrarImagen("imgResultado","error.gif");
    }
}