const helper = require('../helpers/helpers'); 

const blog = [
  { 
    id: 1, 
    dataCriacao: helper.novaData(),
    titulo: "Os desafios da mulher na área de tecnologia",
    conteudo: "Desde pequenas, as mulheres são desestimuladas a seguirem os estudos nas áreas de ciência e tecnologia. Os dados publicados pela ONU Mulheres do ano de 2018, apontam que apenas 17% dos programadores no mundo são do sexo feminino. E apesar do índice de mulheres no mercado de trabalho crescer a cada ano no Brasil, o crescimento das mesmas na área de tecnologia prossegue em ritmo desacelerado e anda em passos mais lentos. Ou seja: é preciso falar sobre os desafios da mulher na área de tecnologia e entender o motivo, além do que pode ser feito para que elas sejam estimuladas a seguir essa carreira.",
    etiquetas: "Artigo: https://movile.blog/os-desafios-da-mulher-na-area-de-tecnologia/", 
   
  },
  { 
    id: 2, 
    titulo: "Conheça algumas mulheres que mudaram o mundo da inovação!",
    dataCriacao: helper.novaData(),
    conteudo: " Garotas do ENIAC As garotas do ENIAC foram um grupo de seis mulheres que trabalharam em um dos primeiros supercomputadores criados pela Escola de Engenharia Moore, no estado americano da Pennsylvania. Betty Snyder, Marlyn Wescoff, Fran Bilas, Kay McNulty, Ruth Lichterman e Adele Goldstine foram as responsáveis pela configuração do ENIAC. Elas lidavam com mais de três mil interruptores e botões que ligavam um hardware de 80 toneladas tudo feito de forma manual. Mais do que operar um maquinário, as mulheres também criaram muitos protocolos que são utilizados até hoje.Sendo assim, o grupo teve uma influência fundamental em sistemas de configurações e preferências de computadores, dando instruções valiosas de uso e melhores práticas para os usuários do ENIAC.", 
    etiquetas: 'Artigo :https://www.impacta.com.br/blog/mulheres-na-tecnologia-elas-mudaram-o-mundo-da-inovacao/', 
    
  }
];

module.exports = blog;
