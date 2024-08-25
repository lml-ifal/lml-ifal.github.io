function login() {
  let error = 0;
  const form = document.getElementById("login");
  const username = form.elements.user?.value;
  const password = form.elements.pass?.value;
  let userLabel = document.querySelector("label[for='user']");
  let passLabel = document.querySelector("label[for='pass']");

  if (username.length < 3) {
    userLabel.style.color = "red";
    userLabel.textContent =
      "Usuário: (Erro: Este campo deve ter ao menos 3 caracteres)";
    error++;
  } else {
    userLabel.style.color = "black";
    userLabel.textContent = "Usuário:";
  }

  if (password.length < 8) {
    passLabel.style.color = "red";
    passLabel.textContent =
      "Senha: (Erro: Este campo deve ter ao menos 8 caracteres)";
    error++;
  } else {
    passLabel.style.color = "black";
    passLabel.textContent = "Senha:";
  }

  if (error < 1) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.usuario === username && u.senha === password
    );

    if (user) {
      window.location.href = "home.html";
      return true;
    }
  }
}

function register() {
  let error = 0;
  let nameLabel = document.querySelector("label[for='name']");
  let emailLabel = document.querySelector("label[for='email']");
  let userLabel = document.querySelector("label[for='user']");
  let passLabel = document.querySelector("label[for='pass']");
  const form = document.getElementById("register");
  const name = form.elements.name?.value;
  const email = form.elements.email?.value;
  const username = form.elements.user?.value;
  const password = form.elements.pass?.value;

  if (name.length < 3) {
    nameLabel.style.color = "red";
    nameLabel.textContent =
      "Nome: (Erro: Este campo deve ter ao menos 3 caracteres)";
    error++;
  } else {
    nameLabel.style.color = "black";
    nameLabel.textContent = "Nome:";
  }

  if (email.length < 3) {
    emailLabel.style.color = "red";
    emailLabel.textContent =
      "Email: (Erro: Este campo deve ter ao menos 3 caracteres)";
    error++;
  } else {
    emailLabel.style.color = "black";
    emailLabel.textContent = "Email:";
  }

  if (username.length < 3) {
    userLabel.style.color = "red";
    userLabel.textContent =
      "Usuário: (Erro: Este campo deve ter ao menos 3 caracteres)";
    error++;
  } else {
    userLabel.style.color = "black";
    userLabel.textContent = "Usuário:";
  }

  if (password.length < 8) {
    passLabel.style.color = "red";
    passLabel.textContent =
      "Senha: (Erro: Este campo deve ter ao menos 8 caracteres)";
    error++;
  } else {
    passLabel.style.color = "black";
    passLabel.textContent = "Senha:";
  }

  if (error < 1) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = {
      nome: name,
      email,
      usuario: username,
      senha: password,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "index.html";
  }
}
