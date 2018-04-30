const axios = require('axios')

const api = axios.create({
  method: 'get',
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 5000
})

const validate = qry => {
  if (typeof qry === 'number' && Number.isInteger(qry) || Array.isArray(qry)) {
    return `/${qry}`
  }

  if (typeof qry === 'object') {
    return `/?${Object.keys(qry)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(qry[key])}`)
      .join('&')}`
  }

  throw new Error(`As argument use an object, an array, an integer or leave it blank`)
}

const get = async (endpoint = '', opt = {}) => {
  const query = validate(opt)

  try {
    const { data } = await api(endpoint + query)
    return data
  } catch (e) {
    console.log(e.message)
    return {
      status: e.response.status,
      error: e.response.data.error
    }
  }
}

exports.getEndpoints = () => get()
exports.getCharacter = (opt = {}) => get('character', opt)
exports.getLocation = (opt = {}) => get('location', opt)
exports.getEpisode = (opt = {}) => get('episode', opt)
