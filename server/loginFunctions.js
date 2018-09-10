`use strict`;
const crypto = require('crypto');

const login = ({ login, password }) => {
  return crypto.createHash('md5').update(login).digest('hex');
}

module.exports = { login }