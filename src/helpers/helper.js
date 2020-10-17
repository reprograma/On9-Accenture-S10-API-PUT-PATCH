const idIncremento = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 1;
    }
}

const dataMomento = () => new Date().toLocaleString();

const verificarTitulo = (array, titulo) => {
    return array.find((elemento) => elemento.titulo == titulo);
}


module.exports = {
    idIncremento,
    dataMomento,
    verificarTitulo
};