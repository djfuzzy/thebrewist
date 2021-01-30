# The Brewist 🍺 📝 🍻

A website for rating beer using [Punk API](https://punkapi.com/documentation/v2) to demonstrate a basic single page web app using:

- [Express.js](https://expressjs.com/) (server)
- [Axios](https://www.axios.com/) (for connecting to Punk API)
- [Vue.js](https://vuejs.org/) (client)
- [Jest](https://jestjs.io/) (unit tests)
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

Runs the Jest tests.

## API

### GET `/api/beers/Weiss`

Returns all beers with partial matches of 'Weiss'. A sample response:

```
[
  {
    "id": 3,
    "name": "Berliner Weisse With Yuzu - B-Sides",
    "description": "Japanese citrus fruit intensifies the sour nature of this German classic.",
    "first_brewed": "11/2015",
    "food_pairing": [
      "Smoked chicken wings",
      "Miso ramen",
      "Yuzu cheesecake"
    ]
  },
  {
    "id": 35,
    "name": "Berliner Weisse With Raspberries And Rhubarb - B-Sides",
    "description": "Tart, dry and acidic with a punch of summer berry as rhubarb crumble.",
    "first_brewed": "11/2015",
    "food_pairing": [
      "Grilled salmon",
      "Mac and cheese fries",
      "Cheesecake with raspberry coulis"
    ]
  },
  ...
]
```

### POST `/api/beers/ratings/3`

Adds a beer rating with an Id of `3` and the following body:

```
{
  "rating": 4,
  "comments": "This beer is tasty."
}
```

### GET `/api/beers/ratings/3`

Returns all beer rating objects with an Id of `3` or `null` if not found. A sample response:

```
[
  {
    "id": 3,
    "rating": 4,
    "comments": "This beer is tasty."
  }
]
```
