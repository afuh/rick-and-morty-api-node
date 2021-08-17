import { getEndpoints } from '.'

describe('getEndpoints', () => {
  test('returns API endpoints', async () => {
    const res = await getEndpoints()

    expect(Object.keys(res.data)).toEqual(['characters', 'locations', 'episodes'])
  })
})
