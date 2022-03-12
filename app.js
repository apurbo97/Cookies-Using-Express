const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

const controller = require('./controller');
app.use(express.json(),cors())

app.get('/addBox', controller.addBoxfun);
app.get('/removeBox', controller.removeBoxfun);
app.get('/clearAll', controller.clearAllfun);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})