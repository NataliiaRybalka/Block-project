import { POWERBANK } from '../../../constants/database.enum';
import { USER } from '../../../constants/database.enum';

exports.up = function(knex) {
  console.log(USER);
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('login');
    table.string('email');
    table.string('password');
    table.integer('powerbank_id').unsigned();
    table.foreign('powerbank_id').references('id').inTable(POWERBANK);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
