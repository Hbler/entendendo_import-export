const nomesNav = ["Home", "Sobre", "Contato"];

function criarNodeNav(arr) {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  arr.forEach((element) => {
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.href = "#";
    link.innerText = element;

    li.appendChild(link);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

const nodeNav = criarNodeNav(nomesNav);

// export default, será o elemento passado no momento da importação
export default nodeNav;
