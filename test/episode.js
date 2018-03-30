const test = require('ava')
const { getEpisode } = require('../src/index')

test('getEpisode({name: "Pilot", episode: "S01E01"}) | Check get by object', async t => {
  const res = await getEpisode({ name: 'Pilot', episode: 'S01E01' })
  const keys = Object.keys(res)

  t.deepEqual(keys, ['info', 'results'])

  res.results.forEach(char => {
    t.is(char.name.includes('Pilot'), true)
    t.is(char.episode.includes('S01E01'), true)
  })
})

test('getEpisode({page: 2}) | Check pagination', async t => {
  const res = await getEpisode({ page: 2 })

  t.is(res.info.next.includes('page=3'), false)
  t.is(res.info.prev.includes('page=1'), true)
})
