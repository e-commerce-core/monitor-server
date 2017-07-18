const Influx = require('influx');
const config = require('../config');

let opt = Object.assign({
  schema: [
    {
      measurement: 'response_times',
      fields: {
        path: Influx.FieldType.STRING,
        duration: Influx.FieldType.INTEGER
      },
      tags: [
        'host'
      ]
    }
  ]
}, config.influxDBConfig);

const influx = new Influx.InfluxDB(opt);

module.exports = influx;
