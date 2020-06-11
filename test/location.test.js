const { getLocation } = require('../src/index');

describe('getLocation', function () {
  test('check get by object', async function () {
    const response = await getLocation({ name: 'Earth', type: 'planet' });
    expect(Object.keys(response)).toEqual(['info', 'results']);

    response.results.forEach(function (location) {
      expect(location.name.includes('Earth')).toBe(true);
      expect(location.type.includes('Planet')).toBe(true);
    });
  });

  test('check pagination', async function () {
    const response = await getLocation({ page: 2 });

    expect(response.info.next.includes('page=3')).toBe(true);
    expect(response.info.prev.includes('page=1')).toBe(true);
  });
});
