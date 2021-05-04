export class Categoria {
  codigo: number;
  sigla: string;
  descricao: string;
}

export class Produto{
  id: number;
  descricao: string;
  valorCompra: number;
  valorVenda: number;
  quantidadeEstoque: number;
  categoria = new Categoria();
}
