const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Acesso:", req.method, req.url);
    next();
})

app.get("/", (req, res) => {
    res.send(`
        <h1>menu</h1>
        <h4>Servidor da turma de LP3 ON</h4><br>
        <li><a href="/aluno/Lorenzo">Ir para aluno</a></li><br>
        <li><a href="/status">Ir para status</a></li>
        `);
})

app.get("/aluno", (req, res) => {
    res.send("Rota do aluno funcionando");
})

app.get("/aluno/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome}!`);
})

app.get("/soma/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a + b;

    res.send(`resutado: ${resultado}`);
})

app.get("/status", (req, res) => {
    res.json({
        servidor:"online",
        disciplina: "LP3",
        professora: "Milena",
        hora: new Date().toLocaleString()
    });
});


const porta = 3000;

app.listen(porta, () => {
        console.log(`Servidor rodando em http://localhost:${porta}`);
});