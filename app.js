const express = require("express"); // importanto o módulo Express

const app = express(); //cria uma intância do express

const PORT = 5000; // Definindo o numero da porta que o servidor vai escutar requisições
// por convenção, variaveis de ambientes são maiúsculas;

app.listen(PORT, ()=>{
    console.log(`prepararando o servidor web com Node.js. Ele está rodando na porta ${PORT}.`)
})