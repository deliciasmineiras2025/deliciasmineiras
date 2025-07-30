let imagens = [];
let indiceAtual = 0;

let popup = document.getElementById("popup");
let imagemAmpliada = document.getElementById("imagemAmpliada");
let fechar = document.querySelector(".fechar");
let anterior = document.querySelector(".anterior");
let proxima = document.querySelector(".proxima");

function abrirPopup(sources) {
  indiceAtual = 0;
  imagens = sources ;
  imagemAmpliada.src = imagens[indiceAtual];
  popup.style.display = "block";
}

function mudarImagem(delta) {
  indiceAtual += delta;
  if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  } else if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }
  imagemAmpliada.src = imagens[indiceAtual];
}



fechar.onclick = () => popup.style.display = "none";
anterior.onclick = () => mudarImagem(-1);
proxima.onclick = () => mudarImagem(1);

window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};
