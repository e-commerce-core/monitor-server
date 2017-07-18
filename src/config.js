const path = require('path');

module.exports = {
  port: 30000,
  routesPath: path.join(__dirname, 'routes'),
  influxDBConfig: {
    host: '127.0.0.1',
    port: 8086,
    database: 'web_performance_db',
    username: 'root',
    password: 'root'
  }
};
