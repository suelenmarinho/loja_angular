import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  produtos: Produto[] = [
    new Produto(
      'Headset Gamer',
      199.90,
      'imagens/headset.jpg'
    ),

    new Produto(
      'Teclado Mecânico',
      299.90,
      'imagens/teclado.jpg'
    ),

    new Produto(
      'Mouse Gamer',
      149.90,
      'imagens/mouse.jpg'
    )
  ];

  mostrarProduto(produto: Produto): void {
    alert(produto.exibirInformacoes());
  }

}
