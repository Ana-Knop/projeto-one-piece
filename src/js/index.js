// comentar em 1 linha
/* comentar em várias linhas */
// para refatorar (criar umafunction) 1-selecionar conteúdo, 2- clicar botão direito, 3- refatorar, 4- extrair para função em escopo global, 5- dar o nome.

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
