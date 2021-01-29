# thebrewist

An app for rating beer

## Terminal Commands

### Serve the API locally

```bash
node server.js
```

## API

### GET `/api/beers/Weiss`

Returns all partial matches of 'Weiss'

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
