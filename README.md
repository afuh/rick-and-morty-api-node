[![Tests](https://github.com/afuh/rick-and-morty-api-node/workflows/Tests/badge.svg)](https://github.com/afuh/rick-and-morty-api-node/actions?query=workflow:Tests)
[![Coverage Status](https://img.shields.io/coveralls/github/afuh/rick-and-morty-api-node/master.svg?style=flat-square)](https://coveralls.io/github/afuh/rick-and-morty-api-node?branch=master)
[![npm version](https://img.shields.io/npm/v/rickmortyapi.svg?style=flat-square)](https://badge.fury.io/js/rickmortyapi)
[![npm downloads](https://img.shields.io/npm/dm/rickmortyapi.svg?style=flat-square)](https://npmjs.org/package/rickmortyapi)
[![Twitter Follow](https://img.shields.io/twitter/follow/rickandmortyapi.svg?style=flat-square&label=Follow)](https://twitter.com/rickandmortyapi)


# The Rick and Morty API JavaScript client
A JavaScript client for retrieving content from [The Rick and Morty API](https://rickandmortyapi.com).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Client Reference](#client-reference)
- [Response schema](#response-schema)
- [Examples](#examples)
  - [Get by Id](#get-by-id)
  - [Get by Ids](#get-by-ids)
  - [Get all](#get-all)
  - [Filter](#filter)
  - [Pagination](#pagination)
  - [Get endpoints](#get-endpoints)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation
`npm i rickmortyapi` or `yarn add rickmortyapi`

## Usage
```js
import { getCharacter } from 'rickmortyapi'
// or
import * as shlaami from 'rickmortyapi' // shlaami.getCharacter()
// or
const plumbus = require('rickmortyapi')
// a Plumbus will provide you with a lifetime of better living and happiness.
```

## Client Reference
https://javascript.rickandmortyapi.com

## Response schema
The response for each method contains the following structure. 

```js
{
  // The HTTP status code from the API response
  data: {},

  // The HTTP status message from the API response
  status: 200,

  // The response that was provided by the API
  statusMessage: 'OK',
}
```

## Examples
All methods return a `promise`. 

### Get by Id
```js
const rick = await getCharacter(1)
const earth = await getLocation(1)
const episodeOne = await getEpisode(1)
```

### Get by Ids
```js
const theSmiths = await getCharacter([ 2, 3, 4, 5 ])
const [ earth, citadel ] = await getLocation([ 1 , 3 ])
const s01 = await getEpisode(Array.from({ length: 11 }, (v, i) => i + 1))
```

### Get all
```js
const characters = await getCharacters()
const locations = await getLocations()
const episodes = await getEpisodes()
```

### Filter
To know more about filtering check the [API documentation](https://rickandmortyapi.com/documentation/#filter-characters) or the client [reference](https://javascript.rickandmortyapi.com/interfaces/interfaces.CharacterFilter.html).

```js
const aliveRicks = await getCharacters({
  name: 'rick',
  status: 'alive'
})

const planets = await getLocations({
  type: 'planet',
  page: 2
})

const seasonOne = await getEpisodes({
  episode: 's01'
})
```

### Pagination
In methods that return a paginated response (`getCharacters`, `getLocations` and `getEpisodes`), you can use a [`page`](https://rickandmortyapi.com/documentation/#info-and-pagination) property to access different pages.

```js
const moreCharacters = await getCharacters({ page: 2 })
```

### Get endpoints
`getEndpoints()`: This method will response with the available resouces, you can use it to ping the server status.
