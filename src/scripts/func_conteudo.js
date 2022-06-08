import { titulos, paragrafos } from "./conteudos.js";

// export simples, declarado junto com a declaração da função
export function criarCards(arr1, arr2) {
  const section = document.createElement("section");

  const arrayDeCards = arr1.map((elemento, index) => {
    const card = document.createElement("article");
    const titulo = document.createElement("h3");
    const texto = document.createElement("p");

    titulo.innerText = elemento;
    texto.innerText = arr2[index].paragrafo;

    card.append(titulo, texto);
    return card;
  });

  section.append(...arrayDeCards);
  section.classList.add("conteudo");
  return section;
}

const cards = criarCards(titulos, paragrafos);

// export default, será único elemento passado caso não realize a descontrução no momento da importação
export default cards;
