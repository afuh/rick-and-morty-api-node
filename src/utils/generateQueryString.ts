import { GetResource } from './getResource'

export const errorMessage = {
  required: 'You are using an invalid argument. As an argument use an integer (Id) or an array of integers (Ids).',
  optional: 'You are using an invalid argument. As an argument use a filter object or leave it blank.',
}

const isInteger = (val: unknown) => typeof val === 'number' && Number.isInteger(val)

export const isArrayOfIntegers = (val: unknown): boolean => Array.isArray(val) && val.every(isInteger)

const generateQueryString = (query: GetResource['options'], isIdRequired?: boolean): string => {
  if (isIdRequired && isInteger(query)) {
    return `/${query}`
  }

  if (isIdRequired && isArrayOfIntegers(query)) {
    const arrayOfIds = query as number[]

    /**
     * [0] forces the API to return an empty array.
     * This should be addressed in the next API codebase update.
     */
    return `/${arrayOfIds.length ? arrayOfIds : '[0]'}`
  }

  if (!isIdRequired && typeof query === 'object' && !Array.isArray(query)) {
    const params = new URLSearchParams(query as Record<string, string>).toString()
    return `/?${params}`
  }

  throw new Error(errorMessage[isIdRequired ? 'required' : 'optional'])
}

export default generateQueryString
