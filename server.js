const app = require('./src/app');
const porta = 5000;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
})