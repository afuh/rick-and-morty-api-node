import { ApiResponse, Endpoints } from '../interfaces'
import getResource from '../utils/getResource'

/**
 * Gets a list of available resources.<br/>
 * https://rickandmortyapi.com/documentation/#rest
 */
export const getEndpoints = (): Promise<ApiResponse<Endpoints>> => getResource({ endpoint: '', options: {} })
