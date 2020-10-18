const obterNovoValor = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }
  
  const novaData = () => new Date().toString()
  
  function verificarTituloExiste(tituloUsado, novoTitulo) {
    if(novoTitulo == tituloUsado) {return true}
    else {return false}
  }


  const verificarEtiquetaExiste = (array, tag) => {
    return array.find((post) => post.tag == tag); //verifica se já existe a mesma tag no post criado
  };

  module.exports = {
    obterNovoValor,
    novaData,
    verificarTituloExiste,
    verificarEtiquetaExiste
  }