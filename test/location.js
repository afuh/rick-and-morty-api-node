const test = require('ava')
const { getLocation } = require('../src/index')

test('getLocation({ name: "Earth", type: "Planet" }) | Check get by object', async t => {
  const res = await getLocation({ name: 'Earth', type: 'Planet' })
  const keys = Object.keys(res)

  t.deepEqual(keys, ['info', 'results'])

  res.results.forEach(char => {
    t.is(char.name.includes('Earth'), true)
    t.is(char.type.includes('Planet'), true)
  })
})

test('getLocation({page: 2}) | Check pagination', async t => {
  const res = await getLocation({ page: 2 })

  t.is(res.info.next.includes('page=3'), true)
  t.is(res.info.prev.includes('page=1'), true)
})
