import { Response } from "express";
import { Transacao } from "../models/Conta";


interface ContaData {
  saldo: number;
  limiteCredito: number;
  transacoes: Transacao[];
}

export default class ContaView {
  public render(res: Response, contaData: ContaData) {
    res.json(contaData);
  }
}