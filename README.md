# Exemplo de Componente utilizando a Shadow DOM.

Este repositório busca demonstrar um exemplo de como utilizar a Shadow DOM para criar componentes que podem ser fácilmente reaproveitáveis.

## O que é DOM?
A DOM (ou Document Object Model) é uma árvore criada pelo navegador para garantir a interação entre o HTML e o Javascript. 

## O que é a Shadow DOM?
A Shadow DOM (ou Árvore Fantasma) é uma árvore que é criada a partir de um ponto da Árvore já criada pelo navegador. Esta faz alterações, inserções ou exclusções sem alterar a árvore já existente, mas dinamizando a marcação, estílo e dinâmica da apresentação desta na apresentação.
Exemplo em Javascript:

```Exemplo

class Exemplo extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})
  }
}

customElements.define('nome', Exemplo)

```

Explicações: 
- HTMLElement: interface que representa qualquer elemento HTML;
- attachShadow: cria uma árvore fantasma. O modo **'open'** representa quando um elemento terá interações externas e **'closed'** quando não haverá;
- customElements.define(): define que a classe poderá ser chamada nas tags HTML a partir de determinado *tag-nome*.
