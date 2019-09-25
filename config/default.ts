module.exports = {
  server: {
    port: 3000,
  },
  db: {
    type: 'postgres',
    port: '5454',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'taskmanagment',
    synchronize: true,
  },
  jwt: {
    expiresIn: 3600,
    secret: 'Area51',
  },
};
