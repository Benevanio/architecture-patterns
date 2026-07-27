// app.ts

import express from "express";
import ContaModel from "./src/models/ContaModel";
import ContaViewModel from "./src/viewmodels/ContaViewModel";
import ContaView from "./src/views/ContaView";

const app = express();
app.use(express.json());

const contaModel = new ContaModel(0, 0);
const contaViewModel = new ContaViewModel(contaModel);
const contaView = new ContaView(contaViewModel);

app.get("/conta", contaView.renderConta.bind(contaView));
app.post("/transacao", contaView.realizarTransacao.bind(contaView));
app.post("/limiteCredito", contaView.definirLimiteCredito.bind(contaView));

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});