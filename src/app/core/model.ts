
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
  data_venda: Date;
  pessoa: Pessoa;
  codigo_usuario: number;
  valor_desconto: number;
  valor_total: number;
  observacao: string;
}

export class ItemVenda{
  codigo: number;
  quantidade: number;
  valor_unitario: number;
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
<<<<<<< HEAD
  endereco: Endereco; 
=======
  endereco: Endereco;
>>>>>>> 37fa2f124927dfbc2fd5f3c105f259ee246f81c6
  login: Login;
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
