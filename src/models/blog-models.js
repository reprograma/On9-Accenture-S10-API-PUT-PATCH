const helper = require('../helpers/helper');

const post = [
  { 
    id: 1,
    dataCriacao: helper.novaData(),
    titulo: "Katie Bouman: a responsável pela primeira imagem de um buraco negro",
    conteudo: "Ela foi responsável por criar um algoritmo capaz de entender milhares de dados astronômicose, com a ajuda de sua equipe, decifrar o que eles chamam de invisível",
    tags: ["algoritmo","buraconegro"]
  },
  
  { 
    id: 2,
    dataCriacao: helper.novaData(),
    titulo: "Conheça Madam C.J. Walker, primeira milionária self made negra dos EUA",
    conteudo: "Ela criou produtos de cabelo especializados para mulheres negras e, em nova minissérie da Netflix, é interpretada pela vencedora do Oscar Octavia Spencer",
    tags: ["empreendedorismo","netflix"]
  },
  
  { 
    id: 3,
    dataCriacao: helper.novaData(),
    titulo: "King and Queen: Beyoncé leva a África para o mundo",
    conteudo: "novo álbum visual de Beyoncé Knowles-Carter, Black is King, lançado em 31 de julho pela Disney Plus, traz um toque africano, com muitos designers do continente apresentando seus trabalhos nele.",
    tags: ["musica","representatividade"]
  }
];

module.exports = post;


/*
"titulo": "Anitta feat Cardi B",
    "conteudo": "Nova parceria da cantora brasileira traz diversidade de ritmos brasileiros",
    "tags": ["brasil" , "funk"]*/