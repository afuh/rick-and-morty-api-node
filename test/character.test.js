const { getCharacter } = require('../src/index');

describe('getCharacter', function () {
  test('check get by object', async function () {
    const response = await getCharacter({ name: 'rick', status: 'alive' });
    expect(Object.keys(response)).toEqual(['info', 'results']);

    response.results.forEach(function (character) {
      expect(character.name.includes('Rick')).toBe(true);
      expect(character.status.includes('Alive')).toBe(true);
    });
  });

  test('check pagination', async function () {
    const response = await getCharacter({ page: 2 });

    expect(response.info.next.includes('page=3')).toBe(true);
    expect(response.info.prev.includes('page=1')).toBe(true);
  });
});
