function calcularValorDescuento(monto, porcentajeDescuento) {
    let descuento = (monto * porcentajeDescuento) / 100;
    return descuento;
    }

function calcularIVa(monto) {
    let iva = monto * 0.12;
    return iva;
    }

function calcularSubtotal (precio, cantidad) {  
    let subtotal = precio * cantidad;
    return subtotal;
}

function calcularTotal (subtotal, descuento, iva) {
    let total = subtotal - descuento + iva;
    return total;
}