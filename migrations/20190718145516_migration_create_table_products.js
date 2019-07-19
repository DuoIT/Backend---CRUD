
exports.up = function(knex) {
    return knex.schema.createTable('products',(table)=>{
        table.increments();
        table.string('name');
        table.string('img');
        table.string('cate');
        table.string('des');
        table.integer('price');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  
};
