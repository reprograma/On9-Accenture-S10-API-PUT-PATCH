const app = require('./src/app');
const porta = 3000;

app.listen(porta, function(){
    console.log(`O servidor está rodando na porta ${porta}`)
})