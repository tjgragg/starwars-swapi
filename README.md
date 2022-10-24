# Welcome to a StarWars Code Challenge

### This codebase is using SWAPI (https://swapi.dev/documentation#intro)

## Getting Started

First things first, run `npm ci` in order to install dependencies.

Tests - `npm run test`

## Running the application

To run the application, it's best to have two terminals running simultaneously.

In one terminal, run `npm run watch` to run tsc compiler in watch mode.

In another terminal, run `npm run start:dev` to start service with nodemon.

## Endpoints

Service currently supports the following endpoints:
```
/starships
* query by pilot: /starships?pilot=<NAME>
/people
* query by name: /people?name=<NAME>
```

## Notes

Initial requests take a bit of time, because, instead of returning paging, we are grabbing compiling the entire lists
and ultimately caching the results.

Subsequent requests are returned almost instantly.

First requests:

Starships - find - ~2 seconds

People - find - ~4-6 seconds

Starships (if starships/people have not been called) - findByPilot - ~6 seconds
