const bcrypt = require("bcryptjs");
const hash = "34567890";
const crypto = {
  create(data) {
    return bcrypt.hashSync(data, 12);
  },
  validate(data, hash) {
    return bcrypt.compareSync(data, hash);
  },
  keyGen(id, mail) {
    const key = id + mail + hash;
    return this.criar(key);
  },
  keyCompare(id, email, auth) {
    const key = id + email + hash;
    return this.validate(key, auth);
  },
};

module.exports = crypto;
