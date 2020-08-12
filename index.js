'use strict';

const got = require('got');
const pkg = require('./package');
const resources = require('./resources');

/**
 * Creates an Omie instance.
 *
 * @param {Object} options Configuration options
 * @param {String} options.appKey The APP Key
 * @param {String} options.appSecret The private app password
 * @param {Boolean} [options.checkTypes] Check types of params passed against duck typed interfaces
 * @param {Number} [options.timeout] The request timeout
 * @constructor
 * @public
 */
function Omie(options) {
  if (!(this instanceof Omie)) return new Omie(options);
  if (!options || !options.appKey || !options.appSecret) {
    throw new Error('Missing or invalid options');
  }

  this.options = {
    timeout: 60000,
    ...options
  };

  this.baseUrl = 'https://app.omie.com.br/api/v1';
}

Omie.prototype.registerAll = function () {
  resources.registerAll(this);
};

Omie.prototype.registerEndpoints = function (endpoints) {
  resources.registerEndpoints(endpoints, this);
};

/**
 * Sends a request to a Omie API endpoint.
 *
 * @param {Object} uri URL object
 * @param {String} method HTTP method
 * @param {(String|undefined)} key Key name to use for req/res body
 * @param {(Object|undefined)} data Request body
 * @param {(Object|undefined)} headers Extra headers
 * @return {Promise}
 * @private
 */
Omie.prototype.request = function request(
  url,
  method,
  callName,
  data,
  headers
) {
  const requestOptions = {
    headers: {
      'User-Agent': `${pkg.name}/${pkg.version}`,
      ...headers
    },
    timeout: this.options.timeout,
    responseType: 'json',
    retry: 0,
    method
  };

  requestOptions.json = {
    app_key: this.options.appKey,
    app_secret: this.options.appSecret,
    call: callName,
    param: [data]
  };

  return got(url, requestOptions).then(
    (res) => {
      const body = res.body;
      return body;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};

module.exports = Omie;
