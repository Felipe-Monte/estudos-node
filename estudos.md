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

```js
  /* USO DE MIDDLEWARE */
  function myMiddleware(request, response, next) {

  if (!request.body.isAdmin) {
    return response.send({ message: "User unauthorized" })
  }

  next()
}
```
