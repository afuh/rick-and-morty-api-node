import { ApiResponse, Info, Location, LocationFilter } from '../interfaces'
import getResource from '../utils/getResource'

const endpoint = 'location'

/**
 * Gets a collection of Locations.<br/>
 * https://rickandmortyapi.com/documentation/#location
 */
export const getLocations = (filters?: LocationFilter): Promise<ApiResponse<Info<Location[]>>> =>
  getResource({ endpoint, options: filters ?? {} })

/**
 * Gets a Location by `id` or array of `ids`.<br/>
 * https://rickandmortyapi.com/documentation/#location
 */
export const getLocation = <T extends number | number[]>(
  id: T,
): Promise<ApiResponse<T extends number ? Location : Location[]>> =>
  getResource({ endpoint, options: id, isIdRequired: true })
