
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', table => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('poison');
    table.string('accessory');
    table.string('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
