import { BLOCK } from '../../../constants/database.enum';

exports.up = function(knex) {
  return knex.schema.createTable(BLOCK, table => {
    table.increments('id').primary();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(BLOCK);
};
