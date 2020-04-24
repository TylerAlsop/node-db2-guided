exports.up = async function(knex) {
    await knex.schema.createTable("fruits", (table) => {
        // table.integer("id").notNull().primary()
        table.increments("id")
        table.text("name").notNull().unique()
        table.float("avgWeightOz").notNull()
        table.boolean("delicious").notNull().defaultTo(true)
    })


    // CREATE TABLE IF NOT EXISTS "fruits" (
    //     "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    //     "name" TEXT NOT NULL UNIQUE,
    //     "avgWeightOz" FLOAT NOT NULL,
    //     "delicious" BOOLEAN NOT NULL DEFAULT true
    // );


};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits")
};
