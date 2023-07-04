const express = require("express")

const app = express()

app.get("/profile/:id/:name", (request, response) => {
  const { id, name } = request.params

  response.send(`
  ID number: ${id}.
  User name: ${name}
  `)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
