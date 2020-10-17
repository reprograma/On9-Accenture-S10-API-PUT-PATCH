const app = require('./src/app');
const porta = 3030;

app.listen(porta, function(){
    console.log(`Server running at port ${porta}`)
}) 