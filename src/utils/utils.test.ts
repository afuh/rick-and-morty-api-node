// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import assert from 'node:assert/strict'
import test from 'node:test'
import { getCharacter, getCharacters } from '../character'
import generateQueryString, { errorMessage, isArrayOfIntegers } from './generateQueryString'

test('generateQueryString', async (t) => {
  await t.test('Id or Ids', () => {
    const isIdRequired = true

    assert.equal(generateQueryString(1, isIdRequired), '/1')
    assert.equal(generateQueryString([1, 2, 3], isIdRequired), '/1,2,3')
  })

  await t.test('filter object', () => {
    assert.equal(generateQueryString({ name: 'rick', status: 'Dead' }), '/?name=rick&status=Dead')
  })

  await t.test('error', () => {
    assert.throws(() => generateQueryString())
    assert.throws(() => generateQueryString('rick'))
    assert.throws(() => generateQueryString(1.1))
  })
})

test('isArrayOfIntegers', async (t) => {
  await t.test('true', () => {
    assert.equal(isArrayOfIntegers([1, 2]), true)
    assert.equal(isArrayOfIntegers([1]), true)
    assert.equal(isArrayOfIntegers([]), true)
  })

  await t.test('false', () => {
    assert.equal(isArrayOfIntegers([1, 'b']), false)
    assert.equal(isArrayOfIntegers([1, 1.2]), false)
  })
})

test('Errors', async (t) => {
  await t.test('Client', () => {
    getCharacters(1).catch((error) => assert.equal(error.message, errorMessage.optional))
    getCharacter({ name: 'rick' }).catch((error) => assert.equal(error.message, errorMessage.required))
    getCharacter('wubba lubba dub dub').catch((error) => assert.equal(error.message, errorMessage.required))
    getCharacters('wubba lubba dub dub').catch((error) => assert.equal(error.message, errorMessage.optional))
  })

  await t.test('API', async () => {
    const res = await getCharacters({ name: 'wubba lubba dub dub' })

    assert.equal(res.status, 404)
    assert.ok(res.statusMessage)
  })
})
