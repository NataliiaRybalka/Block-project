const bookshelf = require('bookshelf');
const knexConf = require('../knex/knex');

const bookshelfConf = bookshelf(knexConf);

module.exports = bookshelfConf;