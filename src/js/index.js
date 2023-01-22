// OBJETIVO 1 - quando usuário clicar em veja o trailer, devemos abrir a modal com o vídeo do trailer
// OBJETIVO 2 - quando usuário clicar no X, devemos fechar a modal

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");
});
