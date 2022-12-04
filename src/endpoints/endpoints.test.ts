import assert from 'node:assert/strict'
import test from 'node:test'
import { getEndpoints } from '.'

test('returns API endpoints', async () => {
  const res = await getEndpoints()

  assert.deepEqual(Object.keys(res.data), ['characters', 'locations', 'episodes'])
})
