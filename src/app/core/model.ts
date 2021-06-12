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

export class Venda{
  codigo: number;
  dataVenda = new Date();
  pessoa = new Pessoa();
  codigo_usuario: number;
  itensVenda: ItemVenda[];
  valor_desconto: number;
  valorTotal: number;
  status: string;
  tipoPagamento: string;
  observacao: string;
}

export class ItemVenda{
  codigo: number;
  produto: Produto;
  quantidade: number;
  valorUnitario: number;
  codigo_venda: number;
}

export class ItemCompra{
  codigo: number;
  quantidade: number;
  valor_unitario: number;
  codigo_compra: number;
}

export class Pessoa{
  id: any;
  nome: string;
  telefone: string;
  email: string;
  tipo: string;
  cpf: string;
  cnpj: string;
  categoria: string;
  cargo: string;
  //endereco: Endereco;
  // endereco: Endereco = new Endereco;
  //login: Login;
  usuario: Login;

}

export class Endereco{
  codigo: number;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  cep: string;
}

export class Cidade{
  codigo: number;
  nome: string;
  estado: Estado;
}

export class Estado{
  codigo: number;
  nome: string;
  UF: string;
}

export class Login{
  id: any; 
  login: string;
  senha: string; 
}
