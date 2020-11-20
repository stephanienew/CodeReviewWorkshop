exports.up = function(knex, Promise) {
  return knex.schema.table('Transportation', function(table) {
      table.integer('utility').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('Transportation', function(table) {
      table.dropColumn('utility');
  });
};