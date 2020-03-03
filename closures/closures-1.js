function hablar() {
    var nombre = 'Zancos';

    function decirNombre() {
        console.log(nombre);
    }

    // Se devuelve la definicion de la funcion decirNombre
    return decirNombre;
}

// Se asigna la ejecucion de hablar a pronunciarNombre
var decirZancos = hablar();

decirZancos();
