class Ficha {
  constructor(nom, raç, cla) {
    this.nome = nom;
    this.raça = raç;
    this.nivel = 1;
    this.classePri = cla;
    this.nivelPri = 0;
    this.classeSec = "Nenhuma";
    this.nivelSec = 0;
    this.idade = 12;
    this.setAtributos(10, 10, 10, 10, 10, 10);
    this.inventario = [];
    this.saude = 10;
    this.saudeTemp = 0;
    this.nivelConj = 0;
  }

  getNome() {
    return this.nome;
  }

  setNome(nom) {
    this.nome = nom;
  }

  getRaça() {
    return this.raça;
  }

  setRaça(raç) {
    this.raça = raç;
  }

  getClassePri() {
    return this.classePri;
  }

  setClassePri(class1) {
    this.classePri = class1;
  }

  getClasseSec() {
    return this.classeSec;
  }

  setClasseSec(class2) {
    this.classeSec = class2;
  }

  getNivelPri() {
    return this.nivelPri;
  }

  setNivelPri(nPri) {
    this.nivelPri = nPri;
    this.nivel = this.nivelPri + this.nivelSec;
    this.proficiencia();
  }

  getNivelSec() {
    return this.nivelSec;
  }

  setNivelSec(nSec) {
    this.nivelSec = nSec;
    this.nivel = this.nivelPri + this.nivelSec;
    this.proficiencia();
  }

  getNivel() {
    return this.nivel;
  }

  getNivelConj() {
    return this.nivelConj;
  }

  setNivelConj(magic) {
    this.nivelConj = magic;
  }

  getInventario() {
    return this.inventario;
  }

  setInventario(item) {
    this.inventario.push(item);
  }

  getIdade() {
    return this.idade;
  }

  setIdade(age) {
    this.idade = age;
  }

  setAtributos(
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
  ) {
    this.strAt = strength;
    this.dexAt = dexterity;
    this.conAt = constitution;
    this.intAt = intelligence;
    this.wisAt = wisdom;
    this.chaAt = charisma;
    this.atribuirmodificador();
  }

  getStrAt() {
    return this.strAt;
  }

  setStrAt(strength) {
    this.strAt = strength;
    this.atribuirmodificador();
  }

  getDexAt() {
    return this.dexAt;
  }

  setDexAt(dexterity) {
    this.dexAt = dexterity;
    this.atribuirmodificador();
  }

  getConAt() {
    return this.conAt;
  }

  setConAt(constitution) {
    this.conAt = constitution;
    this.atribuirmodificador();
  }

  getIntAt() {
    return this.intAt;
  }

  setIntAt(intelligence) {
    this.intAt = intelligence;
    this.atribuirmodificador();
  }

  getWisAt() {
    return this.wisAt;
  }

  setWisAt(wisdom) {
    this.wisAt = wisdom;
    this.atribuirmodificador();
  }

  getChaAt() {
    return this.chaAt;
  }

  setChaAt(charisma) {
    this.chaAt = charisma;
    this.atribuirmodificador();
  }

  getSaude() {
    return this.saude;
  }

  setSaude(hp) {
    this.saude = hp;
  }

  getSaudeTemp() {
    return this.saudeTemp;
  }

  setSaudeTemp(hpt) {
    this.saudeTemp = hpt;
  }

  getProf() {
    return this.prof;
  }

  getStrMod() {
    return this.strMod;
  }

  getDexMod() {
    return this.dexMod;
  }

  getConMod() {
    return this.conMod;
  }

  getIntMod() {
    return this.intMod;
  }

  getWisMod() {
    return this.wisMod;
  }

  getChaMod() {
    return this.chaMod;
  }

  atribuirmodificador() {
    let modifier = [
      "-5",
      "-4",
      "-4",
      "-3",
      "-3",
      "-2",
      "-2",
      "-1",
      "-1",
      0,
      0,
      "+1",
      "+1",
      "+2",
      "+2",
      "+3",
      "+3",
      "+4",
      "+4",
      "+5",
      "+5",
      "+6",
      "+6",
      "+7",
      "+7",
      "+8",
      "+8",
      "+9",
      "+9",
      "+10",
    ];

    this.strMod = modifier[this.strAt - 1];
    this.dexMod = modifier[this.dexAt - 1];
    this.conMod = modifier[this.conAt - 1];
    this.intMod = modifier[this.intAt - 1];
    this.wisMod = modifier[this.wisAt - 1];
    this.chaMod = modifier[this.chaAt - 1];
  }

  proficiencia() {
    let profic = [
      "+2",
      "+2",
      "+2",
      "+2",
      "+3",
      "+3",
      "+3",
      "+3",
      "+4",
      "+4",
      "+4",
      "+4",
      "+5",
      "+5",
      "+5",
      "+5",
      "+6",
      "+6",
      "+6",
      "+6",
      "+7",
      "+7",
      "+7",
      "+7",
      "+8",
      "+8",
      "+8",
      "+8",
      "+9",
      "+9",
    ];

    this.prof = profic[this.nivel - 1];
  }
  //Loucuras de Conjuração para Multiclasses com Magia(apenas até 2 classes diferentes)
  setConjClass1PactMagic() {
    this.nivelConj = "Magia de Pacto";
  }

  setConjClass1Full() {
    this.nivelConj = this.nivelPri;
  }

  setConjClass1Half() {
    this.nivelConj = parseInt((this.nivelPri * 1) / 2);
  }

  setConjClass1Third() {
    this.nivelConj = parseInt((this.nivelPri * 1) / 3);
  }

  setConjClass2Full() {
    this.nivelConj = this.nivelSec;
  }

  setConjClass2Half() {
    this.nivelConj = parseInt((this.nivelSec * 1) / 2);
  }

  setConjClass2Third() {
    this.nivelConj = parseInt((this.nivelSec * 1) / 3);
  }

  setConjClass1FullClass2Full() {
    this.nivelConj = this.nivelPri + this.nivelSec;
  }

  setConjClass1FullClass2Half() {
    this.nivelConj = parseInt(this.nivelPri + (this.nivelSec * 1) / 2);
  }

  setConjClass1FullClass2Third() {
    this.nivelConj = parseInt(this.nivelPri + (this.nivelSec * 1) / 3);
  }

  setConjClass1HalfClass2Full() {
    this.nivelConj = parseInt((this.nivelPri * 1) / 2 + this.nivelSec);
  }

  setConjClass1HalfClass2Half() {
    this.nivelConj = parseInt(
      (this.nivelPri * 1) / 2 + (this.nivelSec * 1) / 2
    );
  }

  setConjClass1HalfClass2Third() {
    this.nivelConj = parseInt(
      (this.nivelPri * 1) / 2 + (this.nivelSec * 1) / 3
    );
  }

  setConjClass1ThirdClass2Full() {
    this.nivelConj = parseInt((this.nivelPri * 1) / 3 + this.nivelSec);
  }

  setConjClass1ThirdClass2Half() {
    this.nivelConj = parseInt(
      (this.nivelPri * 1) / 3 + (this.nivelSec * 1) / 2
    );
  }

  setConjClass1ThirdClass2Third() {
    this.nivelConj = parseInt(
      (this.nivelPri * 1) / 3 + (this.nivelSec * 1) / 3
    );
  }

  porNaTelaATabela() {
    this.informacoes = `
        <caption>
        ${this.getNome()} &rarr; ${this.getClassePri()}<span>AUG/2024</span>
        </caption>
        <tr><td class='ce'>Nome</td><td class='cd'>
        ${this.getNome()}
        </td></tr><tr><td class='ce'>Nível</td><td class='cd'>
        ${this.getNivel()}
        </td></tr><tr><td class='ce'>Bônus de Proficiência</td><td class='cd'>
        ${this.getProf()}
        </td></tr><tr><td class='ce'>Classe Primária</td><td class='cd'>
        ${this.getClassePri()}
        </td></tr><tr><td class='ce'>Nível Primário</td><td class='cd'>
        ${this.getNivelPri()}
        </td></tr><tr><td class='ce'>Classe Secundária</td><td class='cd'>
        ${this.getClasseSec()}
        </td></tr><tr><td class='ce'>Nível Secundário</td><td class='cd'>
        ${this.getNivelSec()}
        </td></tr><tr><td class='ce'>Raça</td><td class='cd'>
        ${this.getRaça()}
        </td></tr><br/><tr><td class='ce'>Idade</td><td class='cd'>
        ${this.getIdade()}
        </td></tr><tr><td class='ce'>Nível de Conjurador</td><td class='cd'>
        ${this.getNivelConj()}
        </td></tr><tr><td class='ce'>Pontos de Vida</td><td class='cd'>
        ${this.getSaude()}
        </td></tr><tr><td class='ce'>Pontos de Vida Temporários</td><td class='cd'>
        ${this.getSaudeTemp()}
        </td></tr><tr><td class='ce'>Inventário</td><td class='cd'>
        ${this.getInventario()}
        </td></tr><tr><td rowspan='8' class='ce'>Atributos</td><tr><tr><td class='cd'>Força: 
        ${this.getStrAt()}
        </td></tr><tr><td class='cd'>Destreza: 
        ${this.getDexAt()}
        </td></tr><tr><td class='cd'>Constituição: 
        ${this.getConAt()}
        </td></tr><tr><td class='cd'>Inteligência: 
        ${this.getIntAt()}
        </td></tr><tr><td class='cd'>Sabedoria: 
        ${this.getWisAt()}
        </td></tr><tr><td class='cd'>Carisma: 
        ${this.getChaAt()}
        </td></tr><tr><td rowspan='6' class='ce'>Modificadores</td><td class='cd'>Mod de Força: 
        ${this.getStrMod()}
        </td></tr><tr><td class='cd'>Mod de Destreza: 
        ${this.getDexMod()}
        </td></tr><tr><td class='cd'>Mod de Constituição: 
        ${this.getConMod()}
        </td></tr><tr><td class='cd'>Mod de Inteligência: 
        ${this.getIntMod()}
        </td></tr><tr><td class='cd'>Mod de Sabedoria: 
        ${this.getWisMod()}
        </td></tr><tr><td class='cd'>Mod de Carisma: 
        ${this.getChaMod()}
        </td></tr>`;
  }
}

function abreModal() {
  document.getElementById("modal").style.display = "block";
}

function fechaModal() {
  document.getElementById("modal").style.display = "none";
}

function makeTableFicha(fichaData) {
  const table = document.createElement("table");
  table.classList.add("tabelaficha");
  let s = new Ficha(fichaData.nome, fichaData.raça, fichaData.classe);
  s.setAtributos(
    randomNumber(10, 16),
    randomNumber(10, 16),
    randomNumber(10, 16),
    randomNumber(10, 16),
    randomNumber(10, 16),
    randomNumber(10, 16)
  );
  s.setNivelPri(1);
  s.setIdade(fichaData.idade);
  s.setClassePri(fichaData.classe);

  s.porNaTelaATabela();

  table.innerHTML = s.informacoes;
  const tabelasDiv = document.querySelector(".tabelas");
  tabelasDiv.appendChild(table);
}

function adicionarFicha() {
  let error = 0;
  let nameLabel = document.querySelector("label[for='name']");
  let raceLabel = document.querySelector("label[for='race']");
  let classLabel = document.querySelector("label[for='class']");
  let ageLabel = document.querySelector("label[for='age']");
  const form = document.getElementById("modalForm");
  const nome = form.elements.name?.value;
  const classe = form.elements.class?.value;
  const raça = form.elements.race?.value;
  const idade = form.elements.age?.value;

  if (nome.length < 3) {
    nameLabel.style.color = "red";
    nameLabel.textContent =
      "Nome: (Erro: Este campo deve ter ao menos 3 caracteres)";
    error++;
  } else {
    nameLabel.style.color = "black";
    nameLabel.textContent = "Nome:";
  }

  if (raça.length < 3) {
    raceLabel.style.color = "red";
    raceLabel.textContent =
      "Raça: (Erro: Este campo deve ter ao menos 3 caracteres)";
    error++;
  } else {
    raceLabel.style.color = "black";
    raceLabel.textContent = "Raça:";
  }

  if (classe.length < 3) {
    classLabel.style.color = "red";
    classLabel.textContent =
      "Classe: (Erro: Este campo deve ter ao menos 3 caracteres)";
    error++;
  } else {
    classLabel.style.color = "black";
    classLabel.textContent = "Classe:";
  }

  if (idade.length < 1) {
    ageLabel.style.color = "red";
    ageLabel.textContent = "Idade: (Campo obrigatório)";
    error++;
  } else {
    ageLabel.style.color = "black";
    ageLabel.textContent = "Idade:";
  }

  if (error < 1) {
    const fichas = JSON.parse(localStorage.getItem("fichas") || "[]");
    const ficha = {
      nome,
      classe,
      raça,
      idade,
    };

    fichas.push(ficha);
    localStorage.setItem("fichas", JSON.stringify(fichas));

    form.elements.name.value = "";
    form.elements.class.value = "";
    form.elements.race.value = "";
    form.elements.age.value = "";

    makeTableFicha(ficha);
    fechaModal();
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function populateTables() {
  const fichas = JSON.parse(localStorage.getItem("fichas") || "[]");

  fichas.forEach((ficha) => {
    makeTableFicha(ficha);
  });
}
window.onload = populateTables;
