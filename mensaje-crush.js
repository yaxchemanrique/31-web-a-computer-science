function eliminarVocales(mensaje) {
    let resultado = '';
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i].toLowerCase();

        if (!vocales.includes(letra)) {
            resultado += mensaje[i];
        }
    }
    console.log(resultado);
}

eliminarVocales('Este es un mensaje secreto para mi crush');