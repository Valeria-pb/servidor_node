const express = require("express");
    const app = express();
    const PORT = 3001; // Porta específica para este projeto

    app.listen(PORT, () => {
        console.log(`SERVIDOR DE USUÁRIOS`);
        console.log(`Rodando na porta ${PORT}.`);
    });
