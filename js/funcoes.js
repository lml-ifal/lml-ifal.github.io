const tema = document.getElementById("musica");
const pauseBTN = document.getElementById("playPause");
let count = 0;

function tocaRaul() {
  if (count == 0) {
    count = 1;
    tema.volume = 0.23;
    tema.play();
    pauseBTN.innerHTML = "PAUSE &#8545;";
  } else {
    count = 0;
    tema.pause();
    pauseBTN.innerHTML = "PLAY &#9658;";
  }
}

function msg() {
  alert("Mensagem enviada para a equipe!");
}

function stop() {
  tema.pause();
  tema.currentTime = 0;
  pauseBTN.innerHTML = "PLAY &#9658;";
}

function reload() {
  location.reload();
}

function addToLocalStorage(ficha) {
  const fichas = JSON.parse(localStorage.getItem("fichas")) || [];
  fichas.push(ficha);
  localStorage.setItem("fichas", JSON.stringify(fichas));
  alert(`Ficha de ${ficha.nome} adicionada!`);
}
