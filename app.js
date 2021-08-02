const express = require('express')
const port = process.env.PORT
const cors = require('cors')
const userRouter = require('./routers/UserRouter')
const ApplicationsRouter = require('./routers/applicationRouter')
require('./models/Applicationsmodel')
require('./db/db')

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use('/applications', ApplicationsRouter)



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
