
import { Conta } from "../entities/Conta";

export interface ContaRepository {
  save(conta: Conta): boolean;
  findById(id: number): Conta | undefined;
  findAll(): Conta[];
}