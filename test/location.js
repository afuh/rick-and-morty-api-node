const test = require('ava')
const { getLocation } = require('../src/index')

test('getLocation() | Get all locations', async t => {
  const res = await getLocation()
  const keys = Object.keys(res)

  t.deepEqual(res.results.length, 20)
  t.deepEqual(keys, ['info', 'results'])
})

test('getLocation(1) | Check get by ID', async t => {
  const res = await getLocation(1)

  t.is(typeof res === 'object', true)
  t.is(res.id, 1)
})

test('getLocation({ name: "Earth", type: "Planet" }) | Check get by object', async t => {
  const res = await getLocation({ name: 'Earth', type: 'Planet' })
  const keys = Object.keys(res)

  t.deepEqual(keys, ['info', 'results'])

  res.results.forEach(char => {
    t.is(char.name.includes('Earth'), true)
    t.is(char.type.includes('Planet'), true)
  })
})

test('getLocation(6000) | Check 404', async t => {
  const res = await getLocation(6000)
  t.is(res.status, 404)
})

test('getLocation("wubba lubba dub dub") | Check throw error', async t => {
  const error = await t.throws(getLocation('wubba lubba dub dub'))
  t.is(error.message, 'As argument use an object, integer or nothing')
})
