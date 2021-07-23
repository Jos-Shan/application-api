const express = require('express')
const port = process.env.PORT
const cors = require('cors')
const userRouter = require('./routers/UserRouter')
const ApplicationsRouter = require('./routers/applications')
require('./models/Applicationsmodel')
require('./db/db')

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use('/Applications', ApplicationsRouter)



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
