const test = require('ava')
const { getCharacter } = require('../src/index')

test('getCharacter({name: "rick", status: "alive"}) | Check get by object', async t => {
  const res = await getCharacter({ name: 'rick', status: 'alive' })
  const keys = Object.keys(res)

  t.deepEqual(keys, ['info', 'results'])

  res.results.forEach(char => {
    t.is(char.name.includes('Rick'), true)
    t.is(char.status.includes('Alive'), true)
  })
})

test('getCharacter({page: 2}) | Check pagination', async t => {
  const res = await getCharacter({ page: 2 })

  t.is(res.info.next.includes('page=3'), true)
  t.is(res.info.prev.includes('page=1'), true)
})
