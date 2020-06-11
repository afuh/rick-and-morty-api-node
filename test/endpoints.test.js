const { getEndpoints } = require('../src/index');

describe('getEndpoints', function () {
  test('returns all endpoints', async function () {
    const resp = await getEndpoints();

    expect(Object.keys(resp)).toEqual(['characters', 'locations', 'episodes']);
  });
});
