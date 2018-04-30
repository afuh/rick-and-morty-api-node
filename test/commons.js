const test = require('ava')
const {
  getEndpoints,
  getCharacter,
  getEpisode,
  getLocation
} = require('../src/index')

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

const commonTests = (method, name) => {
  test(`${name}() | Get all`, async t => {
    const res = await method()
    const keys = Object.keys(res)

    t.deepEqual(res.results.length, 20)
    t.deepEqual(keys, ['info', 'results'])
  })

  test(`${name}(1) | Check get by ID`, async t => {
    const res = await method(1)

    t.is(typeof res === 'object', true)
    t.is(res.id, 1)
  })

  test(`${name}([1,2,3]) | Check get by array`, async t => {
    const arr = [1,2,3]
    const res = await method(arr)
    
    t.plan(arr.length + 1)
    t.is(typeof res === 'object' && Array.isArray(res), true)
    res.forEach(r => t.is(arr.includes(r.id), true))
  })

  test(`${name}(6000) | Check 404`, async t => {
    const res = await method(6000)
    t.is(res.status, 404)
  })

  test(`${name}("wubba lubba dub dub") | Check throw error`, async t => {
    const error = await t.throws(getCharacter('wubba lubba dub dub'))
    t.is(error.message, `As argument use an object, an array, an integer or leave it blank`)
  })
}

commonTests(getCharacter, 'getCharacter')
commonTests(getLocation, 'getLocation')
commonTests(getEpisode, 'getEpisode')
