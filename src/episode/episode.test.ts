import { getEpisode, getEpisodes } from '.'

describe('getEpisodes', () => {
  test('response schema', async () => {
    const res = await getEpisodes()

    expect(res.status).toBeTruthy()
    expect(res.statusMessage).toBeTruthy()
    expect(res.data.info).toBeTruthy()
    expect(res.data.results).toBeTruthy()
  })

  test('get all', async () => {
    const res = await getEpisodes()

    expect(res.data.results?.length).toBe(20)
  })

  test('get by filter', async () => {
    const res = await getEpisodes({ episode: 'S01E01' })

    res.data.results?.forEach((item) => {
      expect(item.episode.includes('S01E01')).toBe(true)
    })
  })

  test('pagination', async () => {
    const res = await getEpisodes({ page: 2 })

    expect(res.data.info?.prev?.includes('page=1')).toBe(true)
  })
})

describe('getEpisode', () => {
  test('get by ID', async () => {
    const res = await getEpisode(1)

    expect(res.data.id).toBe(1)
  })

  test('get by IDs', async () => {
    const res = await getEpisode([1, 2])
    expect(res.data[0].id).toBe(1)
    expect(res.data[1].id).toBe(2)
  })
})
