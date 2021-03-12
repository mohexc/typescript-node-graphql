import express from "express"
import mongoose from "mongoose"
import createUserServer from './createServer'
import { config } from 'dotenv'

config()

const { PORT, DB_PASSWORD, DB_NAME } = process.env
console.log(DB_PASSWORD, DB_NAME)

const startServer = async () => {
    try {
        const app = express()
        await mongoose.connect(`mongodb+srv://nut123:milk0910@clustergraphql.nus70.mongodb.net/authentication?retryWrites=true&w=majority`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        const server = createUserServer()

        server.applyMiddleware({ app })

        app.listen({ port: PORT }, () => console.log(`Server is ready at http://localhost:5000${server.graphqlPath}`))

    } catch (error) {
        console.log(error.message)
    }

}
startServer()