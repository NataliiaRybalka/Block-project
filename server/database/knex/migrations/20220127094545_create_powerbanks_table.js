import { BLOCK } from '../../../constants/database.enum';
import { POWERBANK } from '../../../constants/database.enum';

exports.up = function(knex) {
  return knex.schema.createTable(POWERBANK, table => {
    table.increments('id').primary();
    table.integer('block_id').unsigned();
    table.foreign('block_id').references('id').inTable(BLOCK);
    table.boolean('in_stock');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(POWERBANK);
};

