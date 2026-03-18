const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Acesso:", req.method, req.url);
    next();
})

const filmes = [
    { id: 1, titulo: "A Origem", ano: 2010, nota: 10 },
    { id: 2, titulo: "A Familia do Futuro", ano: 2007, nota: 9 },
    { id: 3, titulo: "Homem-Aranha", ano: 2002, nota: 8 },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 10 },
    { id: 5, titulo: "Click", ano: 2006, nota: 9 }
  ];

  app.get("/", (req, res) => {
    res.send(`
        <h1>menu</h1>
        <h4>Procurar por filmes</h4><br>
        <li><a href="/filmes">Todos os filmes</a></li><br>
        <li><a>Buscar por ID - /filme/"id"</a></li><br>
        <li><a href="/filmes"></a></li><br>
        `);
})

  app.get("/filmes", (req, res) => {
    res.json(filmes);
})

app.get("/filmes/:id", (req, res) => {
    const id = req.params.id;
    const filmes = filmes.find(a => a.id === id);
    if (filmes) {
      res.json(filmes);
    } else {
      res.send("Filme não encontrado");
    }
  });

const porta = 3001;

app.listen(porta, () => {
        console.log(`Servidor rodando em http://localhost:${porta}`);
});