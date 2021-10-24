const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const usersJson = require("../database/users.json");
const IndexModels = {
  users: usersJson,
  findEmail(email) {
    const foundUser = this.usuarios.find((user) => user.email == email);
    if (!foundUser) return false;
    return foundUser;
  },
  registerUser(name, email, password) {
    const user = {
      id: uuid(),
      name,
      email,
      password,
    };
    this.user.push(user);
    this.updateJson();
    return;
  },
  updateJson() {
    const jsonFile = JSON.stringify(this.users);
    fs.writeFileSync(path.resolve("src", "database", "users.json"), jsonFile);
  },
};
module.exports = IndexModels;
