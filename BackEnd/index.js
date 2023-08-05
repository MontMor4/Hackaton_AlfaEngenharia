const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
//permite a renderização de arquivos html
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/src", express.static(path.join(__dirname, "src")));
app.set("views", path.join(__dirname, "/src/pages"));

app.get("/", async (req, res) => {
  //res.send("Página de menu")
  res.json([{ resposta: "funcionou" }]);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
