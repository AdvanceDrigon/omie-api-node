'use strict';

const resourcesMap = require('./resources.json');
/**
 * Returns a prepared api call.
 *
 * @param {string} endpoint The endpoint string
 * @param {string} callName The method to be called
 * @param {Omie} Omie The `Omie` class
 * @private
 */
const prepareRequest = function (endpoint, callName, Omie) {
  const url = `${Omie.baseUrl}/${endpoint}/`;
  const omieRequest = function (payload, headers) {
    return Omie.request(url, 'POST', callName, payload, headers);
  };

  return omieRequest;
};

/**
 * Registers resources on the `Omie` class.
 *
 * @param {Omie} Omie The `Omie` class
 */
function registerAll(Omie) {
  Object.keys(resourcesMap).forEach((namespace) => {
    Omie[namespace] = {};

    Object.keys(resourcesMap[namespace]).forEach((key) => {
      Omie[namespace][key] = {};

      resourcesMap[namespace][key].callMethods.forEach((callName) => {
        const endpoint = resourcesMap[namespace][key].endpoint;
        Omie[namespace][key][callName] = prepareRequest(
          endpoint,
          callName,
          Omie
        );
      });
    });
  });
}

/**
 * Registers specific endpoint resources on the `Omie` class.
 *
 * @param {Array} endpoints Array of endpoints
 * @param {Omie} Omie The `Omie` class
 */
function registerEndpoints(endpoints, Omie) {
  if (!(endpoints instanceof Array)) {
    throw new Error('Endpoints needs to be an Array');
  }

  endpoints.forEach((endpoint) => {
    const namespace = endpoint.split('/')[0];
    const key = endpoint.split('/')[1];

    if (!resourcesMap[namespace][key]) {
      throw new Error(`Couldn't find this endpoint: ${endpoint}`);
    }

    if (!Omie[namespace]) Omie[namespace] = {};
    if (!Omie[namespace][key]) Omie[namespace][key] = {};

    resourcesMap[namespace][key].callMethods.forEach((callName) => {
      Omie[namespace][key][callName] = prepareRequest(endpoint, callName, Omie);
    });
  });
}

module.exports = {
  registerAll,
  registerEndpoints
};
