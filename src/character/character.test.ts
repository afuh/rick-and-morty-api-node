import { getCharacter, getCharacters } from '.'

describe('getCharacters', () => {
  test('response schema', async () => {
    const res = await getCharacters()

    expect(res.status).toBeTruthy()
    expect(res.statusMessage).toBeTruthy()
    expect(res.data.info).toBeTruthy()
    expect(res.data.results).toHaveLength(20)
  })

  test('get by filter', async () => {
    const res = await getCharacters({ name: 'Rick', status: 'Alive' })

    res.data.results?.forEach((item) => {
      expect(item.name).toContain('Rick')
      expect(item.status).toBe('Alive')
    })
  })

  test('pagination', async () => {
    const res = await getCharacters({ page: 2 })

    expect(res.data.info?.prev).toContain('?page=1')
    expect(res.data.info?.next).toContain('?page=3')
  })
})

describe('getCharacter', () => {
  test('get by ID', async () => {
    const res = await getCharacter(1)

    expect(res.data.id).toBe(1)
  })

  test('get by IDs', async () => {
    const res = await getCharacter([1, 2])

    expect(res.data[0].id).toBe(1)
    expect(res.data[1].id).toBe(2)
  })
})
