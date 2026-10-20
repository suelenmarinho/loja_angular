export class Produto {

  nome: string;
  preco: number;
  imagem: string;

  constructor(
    nome: string,
    preco: number,
    imagem: string
  ) {
    this.nome = nome;
    this.preco = preco;
    this.imagem = imagem;
  }

  exibirInformacoes(): string {
    return `${this.nome} - R$ ${this.preco.toFixed(2)}`;
  }

}
