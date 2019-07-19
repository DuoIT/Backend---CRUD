// Update with your config settings.

module.exports = {

    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'express-training',
      user:     'root',
      password: 'abcd1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }

  };

