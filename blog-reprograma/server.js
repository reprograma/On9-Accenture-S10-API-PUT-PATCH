const app = require('./src/app');
const porta = 3030;

app.listen(porta, () =>{
    console.log(`O servidor está rodando http://localhost:${porta}`)
})