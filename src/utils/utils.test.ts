// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { getCharacter, getCharacters } from '../character'
import generateQueryString, { errorMessage, isArrayOfIntegers } from './generateQueryString'
import getResource from './getResource'
import * as get from './get'

describe('generateQueryString', () => {
  test('Id or Ids', () => {
    const isIdRequired = true
    expect(generateQueryString(1, isIdRequired)).toBe('/1')
    expect(generateQueryString([], isIdRequired)).toBe('/[0]')
    expect(generateQueryString([1, 2, 3], isIdRequired)).toBe('/1,2,3')
  })

  test('filter object', () => {
    expect(generateQueryString({ name: 'rick', status: 'Dead' })).toBe('/?name=rick&status=Dead')
  })

  test('error', () => {
    expect(() => generateQueryString()).toThrow()
    expect(() => generateQueryString('rick')).toThrow()
    expect(() => generateQueryString(1.1)).toThrow()
  })
})

describe('isArrayOfIntegers', () => {
  test('true', () => {
    expect(isArrayOfIntegers([1, 2])).toBe(true)
    expect(isArrayOfIntegers([1])).toBe(true)
    expect(isArrayOfIntegers([])).toBe(true)
  })

  test('false', () => {
    expect(isArrayOfIntegers([1, 'b'])).toBe(false)
    expect(isArrayOfIntegers([1, 1.2])).toBe(false)
  })
})

describe('getResource', () => {
  test('combines endpoint and query string into a single request URL', async () => {
    const getSpy = jest.spyOn(get, 'default').mockResolvedValue({ data: {}, status: 200, statusMessage: 'OK' })

    await getResource({ endpoint: 'character', options: 1, isIdRequired: true })

    expect(getSpy).toHaveBeenCalledWith('character/1')

    getSpy.mockRestore()
  })
})

describe('Errors', () => {
  test('Client', () => {
    getCharacters(1).catch((error) => expect(error.message).toBe(errorMessage.optional))
    getCharacter({ name: 'rick' }).catch((error) => expect(error.message).toBe(errorMessage.required))
    getCharacter('wubba lubba dub dub').catch((error) => expect(error.message).toBe(errorMessage.required))
    getCharacters('wubba lubba dub dub').catch((error) => expect(error.message).toBe(errorMessage.optional))
  })

  test('API', async () => {
    const res = await getCharacters({ name: 'wubba lubba dub dub' })

    expect(res.status).toBe(404)
    expect(res.statusMessage).toBeTruthy()
  })
})
