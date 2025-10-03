const express = require("express"); // importanto o módulo Express

const app = express(); //cria uma intância do express

const PORT = 3000; // Definindo o numero da porta que o servidor vai escutar requisições
// por convenção, variaveis de ambientes são maiúsculas;

   app.listen(PORT, () => {
            console.log(`--- PROJETO 2: SERVIDOR DE PRODUTOS ---`);
            console.log(`Rodando na porta ${PORT}.`);
        });
