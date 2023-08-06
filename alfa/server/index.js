const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const multer = require("multer"); // Import multer

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "portal_externo",
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
  //res.send({"corpo":req.body})
  try {
    const params = req.body;

    if (!req.body) {
      console.log(req.body);
      res.send({ resposta: "a requisição está vazia" });
    }

    const newCandidato = {
      nomecandidato: req.body.nomecandidato,
      nomemae: req.body.nomemae,
      nomepai: req.body.nomepai,
      sexo: req.body.sexo,
      estadocivil: req.body.estadocivil,
      GrauDeInstrucao: req.body.GrauDeInstrucao,
      racacor: req.body.racacor,
      cep: req.body.cep,
      pais: req.body.pais,
      estado: req.body.estado,
      cidade: req.body.cidade,
      bairro: req.body.bairro,
      tipologadouro: req.body.tipologradouro,
      enderecoresidencial: req.body.enderecoresidencial,
      numero: req.body.numero,
      complementoendereco: req.body.complementoendereco,
      rg: req.body.rg,
      orgaoemissor: req.body.orgaoemissor,
      cidadeemissaorg: req.body.cidadeemissaorg,
      dataexpedicao: req.body.dataexpedicao,
      cpf: req.body.cpf,
      tamanhobotina: req.body.tamanhobotina,
      tamanhocalca: req.body.tamanhocalca,
      tamanhocamisa: req.body.tamanhocamisa,
      datanascimentocandidato: req.body.datanascimento,
      nacionalidade: req.body.nacionalidade,
      paisnascimento: req.body.paisnascimento,
      estadonascimento: req.body.estadonascimento,
      cidadenascimento: req.body.cidadenascimento,
      telefone1: req.body.telefone1,
      telefone2: req.body.telefone2,
      email: req.body.email,
    };

    db.query(
      "INSERT INTO candidato SET ?",
      newCandidato,
      (error, results, fields) => {
        if (error) {
          console.error("Error inserting data:", error);
          //res.send({"erro":error})
        } else {
          console.log("Data inserted successfully:", results);
          //res.send({ "resposta": results });
        }
      }
    );

    let listaFuncoes = [];
    listaFuncoes = req.body.funcoes;

    const paramsFunc = req.body.funcoes[0];
    const properties = ["codigo", "descricao", "cbo", "idcandidato"];
    const checkFunc = properties.every((property) => {
      return property in paramsFunc;
    });

    if (!checkFunc) {
      const propStr = properties.join(", ");
      res.send("All parameters needed to create a product");
      return;
    }

    listaFuncoes.forEach((element) => {
      let newFuncao = {
        codigo: element.codigo,
        descricao: element.descricao,
        cbo: element.cbo,
        idcandidato: element.idcandidato,
      };
      //res.send({"funcao":newFuncao})
      insertFuncao(newFuncao, db);
    });
    //res.send({"tamanho":resList.length})

    res.send({ resposta: "Inserido com sucesso" });

    /*
    const newOutros ={
      codigofunc:req.body.codigofunc,
      candidatoid:req.body.candidatoid,
      funcao:req.body.funcao,

    }
    
    */
    function insertFuncao(newFuncao, db) {
      db.query(
        "INSERT INTO funcao SET ?",
        newFuncao,
        (error, results, fields) => {
          if (error) {
            console.error("Error inserting data:", error);
            let retorno = {
              situacao: "erro",
            };
            return retorno;
            //res.send({"erro":error})
          } else {
            console.log("Data inserted successfully:", results);
            let retorno = {
              situacao: "sucesso",
            };
            return retorno;
            //res.send({ "resposta": results });
          }
        }
      );
    }
    res.send({ resposta: "sucesso" });
  } catch (error) {
    console.log(error);
    //res.send({"erro":error});
  }
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Save the files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for the uploaded file
  },
});
const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

// Handle file uploads on the '/upload-files' route
app.post("/upload-files", upload.single("file"), (req, res) => {
  // Access the uploaded file using req.file
  if (req.file) {
    console.log("File saved:", req.file);
    // Save the file information or URL to the database as needed
    // You can send a response to the frontend indicating that the file was uploaded successfully
    res.send({ message: "File uploaded successfully" });
  } else {
    console.log("No file uploaded");
    // You can send an error response to the frontend if no file was uploaded
    res.status(400).send({ error: "No file uploaded" });
  }
});
