const express = require('express')
const cors = require('cors')
const allRouter = require('./routers/allRouter')
const authRouter = require('./routers/authRouter')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001

const app = express();

app.use(cors())
app.use(express.json());
app.use("/all", allRouter);
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/Labs`)

        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}

start();