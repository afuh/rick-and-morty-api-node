# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.3.0](https://github.com/afuh/rick-and-morty-api-node/compare/v0.2.2...v2.3.0) (2023-01-15)


### Features

* re-export interfaces ([50730f5](https://github.com/afuh/rick-and-morty-api-node/pull/32/commits/50730f54feb2898c4ff59760bdd2c8ca370d3398))

## [2.2.0](https://github.com/afuh/rick-and-morty-api-node/compare/v0.2.2...v2.2.0) (2023-01-02)


### Bug Fixes

* location residents type ([0b80dd3](https://github.com/afuh/rick-and-morty-api-node/commit/0b80dd3a0cdf5da06ba3e65c6d2f73b96d67c03b))

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