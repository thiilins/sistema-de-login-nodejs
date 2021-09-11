const bcrypt = require("bcryptjs");
const crypto = {
  criar(data) {
    const crypto = bcrypt.hashSync(data, 12);
    return crypto;
  },
  validar(data, hash) {
    const crypto = bcrypt.compareSync(data, hash);
    return crypto;
  },
};
module.exports = crypto;
