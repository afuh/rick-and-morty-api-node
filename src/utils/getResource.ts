import { CharacterFilter, EpisodeFilter, LocationFilter } from '../interfaces'
import generateQueryString from './generateQueryString'
import get from './get'

export interface GetResource {
  endpoint: 'character' | 'location' | 'episode' | ''
  options: number | number[] | CharacterFilter | LocationFilter | EpisodeFilter
  isIdRequired?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getResource = async ({ endpoint, options, isIdRequired = false }: GetResource): Promise<any> => {
  const qs = generateQueryString(options, isIdRequired)

  return get(`${endpoint}/${qs}`)
}

export default getResource
