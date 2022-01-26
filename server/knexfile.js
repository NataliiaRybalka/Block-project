const development = {
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user:     'user',
    password: '123',
    database: 'block-project'
  },
  migrations: {
    tableName: 'migrations'
  },
  seeds: {
    tableName: 'seeds'
  }
};

module.exports = development;