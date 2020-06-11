const { getEpisode } = require('../src/index');

describe('getEpisode', function () {
  test('check get by object', async function () {
    const response = await getEpisode({ name: 'Pilot', episode: 'S01E01' });
    expect(Object.keys(response)).toEqual(['info', 'results']);

    response.results.forEach(function (episode) {
      expect(episode.name.includes('Pilot')).toBe(true);
      expect(episode.episode.includes('S01E01')).toBe(true);
    });
  });

  test('check pagination', async function () {
    const response = await getEpisode({ page: 2 });

    expect(response.info.next).toBe(null);
    expect(response.info.prev.includes('page=1')).toBe(true);
  });
});
