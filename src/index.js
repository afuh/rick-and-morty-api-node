const { get } = require('./get')

const validate = qry => {
  if (typeof qry === 'number' && Number.isInteger(qry) || Array.isArray(qry)) {
    return `/${qry}`
  }

  if (typeof qry === 'object') {
    return `/?${Object.keys(qry)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(qry[key])}`)
      .join('&')}`
  }

  throw new Error('As argument use an object, an array, an integer or leave it blank')
}

const getEndpoint = async (endpoint = '', opt = {}) => {
  const query = validate(opt)

  try {
    const { data } = await get(endpoint + query)
    return data
  } catch (e) {
    return {
      status: e.statusCode,
      error: e.data.error
    }
  }
}

exports.getEndpoints = () => getEndpoint()
exports.getCharacter = (opt = {}) => getEndpoint('character', opt)
exports.getLocation = (opt = {}) => getEndpoint('location', opt)
exports.getEpisode = (opt = {}) => getEndpoint('episode', opt)
