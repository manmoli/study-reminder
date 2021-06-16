module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'add-on',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'add-on'
  },
  production: {
    username: 'root',
    password: 'root',
    database: 'add-on',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}
