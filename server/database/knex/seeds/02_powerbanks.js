const { POWERBANK } = require('../../../constants/database.enum');

exports.seed = function(knex) {
  const powerbanks = [];

  for (let i = 1; i <= 10; i++) {
    powerbanks.push({
      id: i,
      block_id: i
    });
  }

  return knex(POWERBANK).del()
    .then(function () {
      return knex(POWERBANK).insert(powerbanks);
    });
};
