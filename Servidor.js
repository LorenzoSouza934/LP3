const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("servidor da turma de LP3 ON");
}) 

app.get("/aluno", (req, res) => {
    res.send("Rota do aluno funcionando");
})

const porta = 3000;

app.listen(porta, () => {
        console.log(`Servidor rodando em http://localhost:${porta}`);
});