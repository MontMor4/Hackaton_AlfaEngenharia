const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "portal_externo",
});

app.use(express.json());
app.use(cors());
app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});

app.get("/", (req, res) => {
  // Executa a consulta SELECT para recuperar os dados da tabela funcao
  db.query("SELECT * FROM funcao", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao recuperar dados da tabela funcao");
    } else {
      // Retorna os dados da tabela funcao como resposta
      res.json(result);
      console.log("Funcionou");
    }
  });
});
