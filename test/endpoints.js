const test = require('ava')
const { getEndpoints } = require('../src/index')

const base = 'https://rickandmortyapi.com/api/'

test('getEnpoints()', async t => {
  t.plan(4)

  const res = await getEndpoints()
  const keys = Object.keys(res)

  // Keys are plural, ex: 'characters'
  t.deepEqual(keys, ['characters', 'locations', 'episodes'])

  keys.forEach(key => {
    // Enpoints are singular, ex: /api/character
    t.deepEqual(res[key], `${base}${key}`.slice(0, -1))
  })
})
