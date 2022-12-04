import assert from 'node:assert/strict'
import test from 'node:test'
import { getLocation, getLocations } from '.'

test('response schema', async () => {
  const res = await getLocations()

  assert.ok(res.status)
  assert.ok(res.statusMessage)
  assert.ok(res.data.info)
  assert.ok(res.data.results)

  assert.equal(res.data.results?.length, 20)
})

test('get by filter', async () => {
  const res = await getLocations({ dimension: 'C-137' })

  res.data.results?.forEach((item) => {
    assert.ok(item.dimension.includes('C-137'))
  })
})

test('pagination', async () => {
  const res = await getLocations({ page: 2 })

  assert.ok(res.data.info?.prev?.includes('page=1'))
})

test('get by ID', async () => {
  const res = await getLocation(1)

  assert.equal(res.data.id, 1)
})

test('get by IDs', async () => {
  const res = await getLocation([1, 10])
  assert.equal(res.data[0].id, 1)
  assert.equal(res.data[1].id, 10)
})
