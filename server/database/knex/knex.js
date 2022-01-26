const knex = require('knex');
const development = require('../../knexfile');

const knexConf = knex(development);

module.exports = knexConf;