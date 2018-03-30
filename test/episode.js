const test = require('ava')
const { getEpisode } = require('../src/index')

test('getEpisode() | Get all episodes', async t => {
  const res = await getEpisode()
  const keys = Object.keys(res)

  t.deepEqual(res.results.length, 20)
  t.deepEqual(keys, ['info', 'results'])
})

test('getEpisode(1) | Check get by ID', async t => {
  const res = await getEpisode(1)

  t.is(typeof res === 'object', true)
  t.is(res.id, 1)
})

test('getEpisode({name: "Pilot", episode: "S01E01"}) | Check get by object', async t => {
  const res = await getEpisode({ name: 'Pilot', episode: 'S01E01' })
  const keys = Object.keys(res)

  t.deepEqual(keys, ['info', 'results'])

  res.results.forEach(char => {
    t.is(char.name.includes('Pilot'), true)
    t.is(char.episode.includes('S01E01'), true)
  })
})

test('getEpisode(6000) | Check 404', async t => {
  const res = await getEpisode(6000)
  t.is(res.status, 404)
})

test('getEpisode("wubba lubba dub dub") | Check throw error', async t => {
  const error = await t.throws(getEpisode('wubba lubba dub dub'))
  t.is(error.message, 'As argument use an object, integer or nothing')
})
