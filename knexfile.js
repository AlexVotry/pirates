// this is where we access the db

module.exports = {
  development: {
    client: 'pg',
    connection: 'progress://localhost/pirates_dev'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
