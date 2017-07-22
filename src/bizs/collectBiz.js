const cacheStore = require('../common/cacheStore');
const multiparty = require('multiparty');
const form = new multiparty.Form();

const pagePerformanceKeys = ['dns', 'tcp', 'request', 'dom', 'white', 'domready', 'onload'];

module.exports = {
  _processQueryData(query) {
    let result = {};
    !query && (query = {}); // 防御空
    let val;
    pagePerformanceKeys.forEach(k => {
      val = +query[k];
      result[k] = val !== val ? -1 : val;
    });
    return result;
  },
  _processBeaconData(req) {
    return new Promise((resolve, reject) => {
      form.parse(req, function (err, fields, files) {
        if (err) { return reject(err) }
        let result = {};
        let val;
        pagePerformanceKeys.forEach(k => {
          val = +(fields[k] || [])[0];
          result[k] = val !== val ? -1 : val;
        });
        resolve(result);
      });
    });
  },
  async processPagePerformance(ctx, type = 'post') {
    let result = await (type === 'get' ? this._processQueryData(ctx.request.query) : this._processBeaconData(ctx.req));
    console.log(type, result);
    // todo 等待写入到InfluxDB
  }
};
