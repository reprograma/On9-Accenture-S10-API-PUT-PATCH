const postagens = require("../models/blog-models")


const verificarTag = (array,etiqueta) =>{
    return array.find((postagens)=> postagens.etiquetas == etiqueta)
};

const verificarTitulo = (array, titulo) =>{
    return array.find((postagens) => postagens.titulo == titulo)
}

const novoId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }

const novaData = () => new Date().toString()  

module.exports = {
 verificarTag, 
 verificarTitulo,
 novoId, 
 novaData

}