```js
  /* MÉTODO GET */
  app.get("/profile/:id/:name", (request, response) => {
  const { id, name } = request.params

  response.send(`
  ID number: ${id}.
  User name: ${name}
  `)
})
```
