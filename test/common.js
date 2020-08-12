'use strict';

const nock = require('nock');
const pkg = require('../package');
const Omie = require('..');
const appKey = '38333295000';
const appSecret = '4cea520a0e2a2ecdc267b75d3424a0ed';
const omie = new Omie({ appKey, appSecret });

const scope = nock('https://app.omie.com.br/api/v1', {
  reqheaders: {
    'User-Agent': `${pkg.name}/${pkg.version}`,
    Accept: 'application/json'
  }
});

module.exports = {
  appSecret,
  appKey,
  scope,
  omie
};
