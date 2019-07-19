
exports.up = function(knex) {
    return knex.schema.createTable('cates',(table)=>{
        table.increments();
        table.string('name');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  
};
