const express = require('express');
const app = express()
const rootRouter = require('./routers')
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use('/', rootRouter)


const port = 8080

app.listen(port, () => {
    console.log(`App listenning on port http://localhost:${port}`)
})

