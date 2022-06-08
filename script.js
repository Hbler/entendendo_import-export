//// Imports
// import a partir de um export default sem modificar o nome
import nodeNav from "./src/scripts/func_nav.js";

// import a partir de um export default modificando o nome
import cardsConteudo from "./src/scripts/func_conteudo.js";

// import a partir de um export em um arquivo com export default e um export normal
import { criarCards } from "./src/scripts/func_conteudo.js";

// import te todos os exports de um arquivo utilizando a keyword ‘as’ para atribuir o nome de base das importações
import * as botao from "./src/scripts/botoes.js";
// import a partir do mesmo arquivo mas realizando a descontrução
import { dois } from "./src/scripts/botoes.js";

//// Vaiaveis Globais
const sectionExemplos = document.querySelector(".exemplos");

//// Restante da lógica
sectionExemplos.appendChild(nodeNav);
sectionExemplos.appendChild(cardsConteudo);

sectionExemplos.append(botao.um(), dois(), botao.tres());
