const botaoMenu = document.getElementById("menu-hamburger");
const conteudoMenu = document.querySelector(".conteudo-menu");


botaoMenu.addEventListener("click", () => {
    conteudoMenu.classList.toggle("aberto");
});









document.querySelectorAll(".tamanhos").forEach((grupo) => {
    const botoes = grupo.querySelectorAll("button");

    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {

            if (botao.classList.contains("selecionado")) {
                botao.classList.remove("selecionado");
            } else {
                botoes.forEach((outroBotao) => {
                    outroBotao.classList.remove("selecionado");
                });

                botao.classList.add("selecionado");
            }

        });
    });
});