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

app.post("/cadastrar-candidato", (req, res) => {
  //res.send({'corpo':req.body})
  try {
    const params = req.body;
    properties = [
      "nome",
      "nomepai",
      "nomemae",
      "sexo",
      "estadocivil",
      "grauinstrucao",
      "racacor",
      "datanascimento",
      "nacionalidade",
      "paisnascimento",
      "estadonascimento",
      "cidadenascimento",
      "tamanhobotina",
      "tamanhocalca",
      "tamanhocamisa",
      "telefone",
      "telefone2",
      "cep",
      "pais",
      "estado",
      "cidade",
      "bairro",
      "tipologradouro",
      "enderecoresidencial",
      "numero",
      "complementoendereco",
      "numerorg",
      "orgaoidentidade",
      "estadoorgaoemissor",
      "cidadeemissao",
      "dataexpedicao",
      "cpf",
      "numeropis",
      "funcao",
      "alojado",
      "pcd",
      "arquivorg",
      "arquivocpf",
      "arquivocurriculo",
      "arquivocnh",
      "arquivoreservista",
      "trabalha",
    ];

    const ckeck = properties.every((property) => {
      return property in params;
    });
    if (!check) {
      console.log("Alguns parametros não foram enviados");
    }
  } catch (error) {
    res.send(error);
  }
  if (!req.body) {
    console.log(req.body);
    res.send({ resposta: "a requisição está vazia" });
  }
  const newUser = {
    id: req.body.id,
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    nickname: req.body.nickname,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  pool.query(
    "INSERT INTO usuarios SET ?",
    newUser,
    (error, results, fields) => {
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", results);
        res.send({ resposta: results });
      }
    }
  );
});
