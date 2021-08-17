import { ApiResponse, Episode, EpisodeFilter, Info } from '../interfaces'
import getResource from '../utils/getResource'

const endpoint = 'episode'

/**
 * Gets a collection of Episodes.<br/>
 * https://rickandmortyapi.com/documentation/#episode
 */
export const getEpisodes = (filters?: EpisodeFilter): Promise<ApiResponse<Info<Episode[]>>> =>
  getResource({ endpoint, options: filters ?? {} })

/**
 * Gets an Episode by `id` or array of `ids`.<br/>
 * https://rickandmortyapi.com/documentation/#episode
 */
export const getEpisode = <T extends number | number[]>(
  id: T,
): Promise<ApiResponse<T extends number ? Episode : Episode[]>> =>
  getResource({ endpoint, options: id, isIdRequired: true })
