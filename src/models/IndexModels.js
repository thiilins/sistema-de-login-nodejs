const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const usuariosJson = require("../database/usuarios.json");
const IndexModels = {
  usuarios: usuariosJson,
  localizarEmail(email) {
    const usuarioLocalizado = this.usuarios.find((user) => user.email == email);
    if (!usuarioLocalizado) return false;
    return usuarioLocalizado;
  },
  cadastrarUsuario(name, email, password) {
    const usuario = {
      id: uuid(),
      name,
      email,
      password,
    };
    this.usuarios.push(usuario);
    this.AtualizarJSON();
    return;
  },
  AtualizarJSON() {
    const arquivoJSON = JSON.stringify(this.usuarios);
    fs.writeFileSync(
      path.resolve("src", "database", "usuarios.json"),
      arquivoJSON
    );
  },
};
module.exports = IndexModels;
