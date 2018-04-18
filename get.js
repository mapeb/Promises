//
// Pequeña biblioteca para realizar pedidos HTTP
//
var Client = require('node-rest-client').Client;
var Promise = require('bluebird');

module.exports = function (url, parameters, timeout, cont) {
  return new Promise(function (resolve, reject) {
    var client = new Client();
    const args = { 
      requestConfig: {
        timeout: timeout,
        noDelay: true,
        keepAlive: true,
        keepAliveDelay: 1000
      },
      responseConfig: {
        timeout: timeout 
      },
      parameters: parameters
     }

    const req = client.get(url, args, function (data, incomingMessage) {
      if (incomingMessage.statusCode > 299) {
        reject(data)
      }
      resolve(data);
    });

    req.on('requestTimeout', req => {
      reject('timeout')
      console.log('Timeout.')
      req.abort()
    })
  })
};
