## 1.0.0 

### New Features
- The client has been entirely rewritten in Typescript. 
- New client API reference documentation: https://javascript.rickandmortyapi.com
- The methods have been redefined to maintain a more consistent data structure.
  - New methods: `getCharacters`, `getLocations` and `getEpisodes`

### Breaking Changes
- The response schema of all methods has been updated and return the same structure. https://github.com/afuh/rick-and-morty-api-node#response-schema
- Package imports https://github.com/afuh/rick-and-morty-api-node#usge
- `getCharacter`, `getLocation` and `getEpisode` are now used for non-paginated responses. An `Id` or array of `Ids` is now required. https://github.com/afuh/rick-and-morty-api-node#get-by-id 
- To continue using pagination or simply require all items of a resource, new methods are now available. https://github.com/afuh/rick-and-morty-api-node#pagination