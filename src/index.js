const { get } = require('./get');
const { validate } = require('./validate');

async function getEndpoint(endpoint = '', opt = {}) {
  const query = validate(opt);
  const endpointUrl = `${endpoint}${query}`;

  return await get(endpointUrl);
}

exports.getEndpoints = () => getEndpoint();
exports.getCharacter = (opt = {}) => getEndpoint('character', opt);
exports.getLocation = (opt = {}) => getEndpoint('location', opt);
exports.getEpisode = (opt = {}) => getEndpoint('episode', opt);
