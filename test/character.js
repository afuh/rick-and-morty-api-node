const test = require('ava')
const { getCharacter } = require('../src/index')

test('getCharacter() | Get all characters', async t => {
  const res = await getCharacter()
  const keys = Object.keys(res)

  t.deepEqual(res.results.length, 20)
  t.deepEqual(keys, ['info', 'results'])
})

test('getCharacter(1) | Check get by ID', async t => {
  const res = await getCharacter(1)

  t.is(typeof res === 'object', true)
  t.is(res.id, 1)
})

test('getCharacter({name: "rick", status: "alive"}) | Check get by object', async t => {
  const res = await getCharacter({ name: 'rick', status: 'alive' })
  const keys = Object.keys(res)

  t.deepEqual(keys, ['info', 'results'])

  res.results.forEach(char => {
    t.is(char.name.includes('Rick'), true)
    t.is(char.status.includes('Alive'), true)
  })
})

test('getCharacter(6000) | Check 404', async t => {
  const res = await getCharacter(6000)
  t.is(res.status, 404)
})

test('getCharacter("wubba lubba dub dub") | Check throw error', async t => {
  const error = await t.throws(getCharacter('wubba lubba dub dub'))
  t.is(error.message, 'As argument use an object, integer or nothing')
})
