const botoes = document.querySelectorAll('.Botao');


const Personagens = document.querySelectorAll(".Personagem");


botoes.forEach((Botao, indice) => {


    Botao.addEventListener("click", () => {


        DesselecionarBotao();
        Botao.classList.add("Selecionado");

        DesselecionarPersonagem();
        Personagens[indice].classList.add("Selecionado");

    })
})


function DesselecionarPersonagem() {
    const PersonagemSelecionado = document.querySelector(".Personagem.Selecionado");
    PersonagemSelecionado.classList.remove("Selecionado");
}

function DesselecionarBotao() {
    const BotaoSelecionado = document.querySelector(".Botao.Selecionado");
    BotaoSelecionado.classList.remove("Selecionado");
}
