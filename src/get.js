const https = require('https');

const baseUrl = 'https://rickandmortyapi.com/api/';

function get(endpointUrl) {
  return new Promise(function (resolve, reject) {
    const url = `${baseUrl}${endpointUrl}`;
    https.get(url, function (response) {
      response.setEncoding('utf8');
      let body = '';

      response.on('data', (data) => (body += data));

      response.on('error', (error) => reject(error));

      response.on('end', function () {
        body = JSON.parse(body);
        response.data = body;
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(response);
        } else {
          reject(response);
        }
      });
    });
  });
}

exports.get = get;