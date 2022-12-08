## 2.1.1

### Bug Fixes
- episode type [67085dc](https://github.com/afuh/rick-and-morty-api-node/commit/67085dc17943b7bd1bd59209d30ddc67c5c9df47)

## 2.0.1

- remove unused package [ff8673f](https://github.com/afuh/rick-and-morty-api-node/commit/ff8673f5f9359a30154950f72425ace9e1102dff)

## 2.0.0

### Breaking Changes
- Only Node 18 is supported.
- Use `fetch` API ([experimental](https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental) in Node 18) instead of the `https` module. This makes it easier to use in applications running Webpack 5.

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