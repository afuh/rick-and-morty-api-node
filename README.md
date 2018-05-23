[![Build Status](https://img.shields.io/travis/afuh/rick-and-morty-api-node.svg?style=flat-square)](https://travis-ci.org/afuh/rick-and-morty-api-node)
[![Coverage Status](https://img.shields.io/coveralls/github/afuh/rick-and-morty-api-node/master.svg?style=flat-square)](https://coveralls.io/github/afuh/rick-and-morty-api-node?branch=feature%2Fcover)
[![npm version](https://img.shields.io/npm/v/rickmortyapi.svg?style=flat-square)](https://badge.fury.io/js/rickmortyapi)
[![npm downloads](https://img.shields.io/npm/dm/rickmortyapi.svg?style=flat-square)](https://npmjs.org/package/rickmortyapi)
[![Twitter Follow](https://img.shields.io/twitter/follow/rickandmortyapi.svg?style=flat-square&label=Follow)](https://twitter.com/rickandmortyapi)


# The Rick and Morty API JavaScript client

> Hey, did you ever want to hold a terry fold?,
>  I got one right here, grab my terry flap.

This is a Node wrapper to use the [The Rick and Morty API](https://rickandmortyapi.com) in your favourite JavaScript project.

**To get started check the documentation on [rickandmortyapi.com](https://rickandmortyapi.com/documentation)**

## Installation


`npm i rickmortyapi`
or
`yarn add rickmortyapi`

## Usage
```js
import { getCharacter } from 'rickmortyapi' // getCharacter()
// or
import shlaami from 'rickmortyapi' // shlaami.getCharacter()
// or
const tinyRick = require('rickmortyapi')
// You can use the name that you desire,
// You could name it Plumbus for instance,
// because a Plumbus will provide you with a lifetime of better living and happiness.
```

All methods return a promise.

- `getCharacter()`
- `getEpisode()`
- `getLocation()`

All the methods work in the same way. The only exception is the queries that you can pass as an object to each method.
To know more about the schema of each response, please check [here](https://rickandmortyapi.com/documentation/#character-schema)

### Get by ID
```js
const rick = await getCharacter(1)
const earth = await getLocation(1)
const episodeOne = await getEpisode(1)

// You can also use an array of IDs.
const theSmiths = await getCharacter([ 2, 3, 4, 5 ])
const [ earth, citadel ] = await getLocation([ 1, 3 ])
const s01 = await getEpisode(Array.from({ length: 11 }, (v, i) => i + 1))
```

### Filter
Pass an object with the queries.
To know more about filtering check the [docs](https://rickandmortyapi.com/documentation/#filter-characters).

```js
const aliveRicks = await getCharacter({
  name: 'rick',
  status: 'alive'
})

// You can pass page number inside the object
const planets = await getLocation({
  type: 'planet',
  page: 2
})

const seasonOne = await getEpisodes({
  episode: 's01'
})
```

### Get all
```js
const chars = await getCharacter()
const locations = await getLocation()
const episodes = await getEpisode()

// You can pass a page number to access all the pages inside the info object
// To know more about the info object and pagination, check
// https://rickandmortyapi.com/documentation/#info-and-pagination
const moreChars = await getCharacter({ page: 2})
```

- `getEndpoints()`

This method will response with the available REST endpoints, you can use it to ping the server status.
