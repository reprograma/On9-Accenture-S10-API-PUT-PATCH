const helpers = require('../helpers/blogRepHelpers')

const blogModel =
[
    {
        id: 1,
        dataCriacao: helpers.criarData,
        titulo: "Node.js",
        conteudo:"Tudo sobre Node.js",
        etiquetas:"'Node.js', 'javascript'"

    },
    {
        id: 2,
        dataCriacao: helpers.criarData,
        titulo: "HTTP",
        conteudo: "Metodos Http",
        etiquetas: "'POST', 'PUT', 'DELETE'"
    }
]
module.exports = blogModel