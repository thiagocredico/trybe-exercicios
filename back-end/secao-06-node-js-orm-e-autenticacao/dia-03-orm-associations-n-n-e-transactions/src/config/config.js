const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'orm_trybe',
  host: process.env.DB_HOST || 'mysql',
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_DIALECT || 'mysql'
};

module.exports = {
  development: { ...config },
  test: { ...config },
  production: { ...config },
};