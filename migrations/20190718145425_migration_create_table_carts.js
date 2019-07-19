
exports.up = function(knex) {
    return knex.schema.createTable('carts',(table)=>{
        table.increments();
        table.string('userid');
        table.string('productid');
        table.integer('qty');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  
};
