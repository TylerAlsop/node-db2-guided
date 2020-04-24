module.exports = {
  client: "sqlite3", // Specifying the DBMS
  useNullAsDefault: true, //  A flag that's required for SQLite specifically
  connection: {
    filename: "./data/produce.db3" // Location of our database file
  }
}