# The Brewist 🍺 📝 🍻

A website for rating beer using [Punk API](https://punkapi.com/documentation/v2) to demonstrate a basic single page web app using:

- [Express.js](https://expressjs.com/) (server)
- [Axios](https://www.axios.com/) (for connecting to Punk API)
- [Vue.js](https://vuejs.org/) (client)
- [Mocha](https://mochajs.org/) (unit tests)
- [nosql](https://docs.totaljs.com/latest/en.html#api~Database) (local database)
- [memory-cache](https://github.com/ptarjan/node-cache) (external request caching)

## Terminal Commands

In the project directory, you can run:

### `npm install`

Installs the project's dependencies.

### `node server.js`

Runs the server in development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## API

### GET `/api/beers/Weiss`

Returns all beers with partial matches of 'Weiss'

### PUT `/api/beers/ratings/3`

Adds or updates a beer rating with an Id of `3` and the following body:

```
{
  id: 3
  rating: 4
  comments: "This beer is tasty."
}
```

### GET `/api/beers/ratings/3`

Returns the beer rating object with an Id of `3` or `null` if not found.
