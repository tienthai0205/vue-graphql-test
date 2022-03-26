const parse = require('pg-connection-string').parse;
const config = parse('postgres://mtedrliphuzuir:a2579adf11c7d77363f019e9aa791140154c2196b7e6f2b2cfd45c10aae5ea9e@ec2-44-194-92-192.compute-1.amazonaws.com:5432/daqnlus6p3hdk1');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
