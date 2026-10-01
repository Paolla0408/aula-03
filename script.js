const campoFilme = document.getElementById("filme");
const botaoAdicionar = document.getElementById("adicionar");
const botaoAZ = document.getElementById("az");
const botaoZA = document.getElementById("za");
const campoBusca = document.getElementById("busca");
const listaFilmes = document.getElementById("listaFilmes");

const filmes = [];

let ordemAtual = "az";

function mostrarFilmes() {
    let lista = [...filmes];

    if (ordemAtual === "az") {
        lista.sort((a, b) => a.localeCompare(b));
    } else {
        lista.sort((a, b) => b.localeCompare(a));
    }

    const termo = campoBusca.value.toLowerCase().trim();

    lista = lista.filter((filme) =>
        filme.toLowerCase().includes(termo)
    );

    listaFilmes.innerHTML = "";

    lista.forEach((filme) => {
        const item = document.createElement("li");
        item.textContent = filme.toUpperCase();
        listaFilmes.appendChild(item);
    });
}

botaoAdicionar.addEventListener("click", () => {
    const filme = campoFilme.value.trim();

    if (filme === "") {
        return;
    }

    filmes.push(filme);

    campoFilme.value = "";
    campoFilme.focus();

    mostrarFilmes();
});

botaoAZ.addEventListener("click", () => {
    ordemAtual = "az";

    botaoAZ.classList.add("selecionado");
    botaoZA.classList.remove("selecionado");

    mostrarFilmes();
});

botaoZA.addEventListener("click", () => {
    ordemAtual = "za";

    botaoZA.classList.add("selecionado");
    botaoAZ.classList.remove("selecionado");

    mostrarFilmes();
});

campoBusca.addEventListener("input", () => {
    mostrarFilmes();
});

botaoAZ.classList.add("selecionado");