const { validate } = require('../src/validate');

describe('validate', function () {
  test('accepts numbers', function () {
    expect(validate(1)).toBe('/1');
  });

  test('accepts array of numbers', function () {
    expect(validate([1, 2, 3])).toBe('/1,2,3');
  });

  test('accepts queryParams', function () {
    expect(validate({ foo: 'bar', baz: 'qux' })).toBe('/?foo=bar&baz=qux');
  });

  test('throws exception otherwise', function () {
    expect(() => validate()).toThrow();
    expect(() => validate(null)).toThrow();
    expect(() => validate(undefined)).toThrow();
    expect(() => validate('hello')).toThrow();
    expect(() => validate(1.1)).toThrow();
  });
});
