const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require('body-parser')

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "luiz2001",
  database: "portal_externo",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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
  try {
    const params = req.body;
    /*
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
    */
    if (!req.body) {
      console.log(req.body);
      res.send({ resposta: "a requisição está vazia" });
    }
    const newCandidato = {
      nomecandidato:req.body.nomecandidato,
      nomemae:req.body.nomemae,
      nomepai:req.body.nomepai,
      sexo:req.body.sexo,
      estadocivil:req.body.estadocivil,
      graudeinstrucao:req.body.graudeinstrucao,
      racacor:req.body.racacor,
      cep:req.body.cep,
      pais:req.body.pais,
      estado:req.body.cidade,
      bairro:req.body.bairro,
      tipologradouro:req.body.tipologradouro,
      enderecoresidencial:req.body.enderecoresidencial,
      numero:req.body.numero,
      complementoendereco:req.body.complementoendereco,
      rg:req.body.rg,
      orgaoemissor:req.body.orgaoemissor,
      cidadeemissaorg:req.body.cidadeemissaorg,
      dataexpedicao:req.body.dataexpedicao,
      cpf:req.body.cpf,
      tamanhobotina:req.body.tamanhobotina,
      tamanhocalca:req.body.tamanhocalca,
      tamanhocamisa:req.body.tamanhocamisa,
      datanascimento:req.body.datanascimento,
      nacionalidade:req.body.nacionalidade,
      paisnascimento:req.body.paisnascimento,
      estadonascimento:req.body.estadonascimento,
      cidadenascimento:req.body.cidadenascimento,
      telefone1:req.body.teefone1,
      telefone2:req.body.telefone2,
      email:req.body.email,
    };
  
    db.query(
      "INSERT INTO candidato SET ?",
      newCandidato,
      (error, results, fields) => {
        if (error) {
          console.error("Error inserting data:", error);
          res.send({"erro":error})
        } else {
          console.log("Data inserted successfully:", results);
          res.send({ "resposta": results });
        }
      }
    );

  } catch (error) {
    console.log(error);
    //res.send({"erro":error});
  }
  
});
