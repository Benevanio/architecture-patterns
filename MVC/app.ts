import express from "express";
import ContaController from "./src/controllers/ContaController";
import Conta from "./src/models/Conta";
import ContaView from "./src/views/ContaView";
const app = express();
app.use(express.json());

const conta = new Conta(0, 0);
const contaView = new ContaView();
const contaController = new ContaController(conta, contaView);

app.get("/conta", contaController.getConta.bind(contaController));
app.post("/transacao", contaController.realizarTransacao.bind(contaController));
app.post("/limiteCredito", contaController.definirLimiteCredito.bind(contaController));

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});