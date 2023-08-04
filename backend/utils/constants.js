// const JWT_TOKEN_EXPIRES = '7d';

// генерация сикрет-ключа в терминале через
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
const SECRET_KEY = 'e48c3013265b869e0e40ebd19adf5f1f12b90129191b01ef7f7bbd722937a074';
// регулярное выражение
/** регулярное выражение */
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const CREATED_STATUS = 201;

module.exports = {
  SECRET_KEY,
  URL_REGEX,
  CREATED_STATUS,

};
