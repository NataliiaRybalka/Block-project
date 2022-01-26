const { BLOCK } = require('../../../constants/database.enum');

exports.seed = function(knex) {
  const blocks = [];

  for (let i = 1; i <= 10; i++) {
    blocks.push({
      id: i
    });
  }

  return knex(BLOCK).del()
    .then(function () {
      return knex(BLOCK).insert(blocks);
    });
};
