import express from "express"

import createUserServer from './createServer'

const startServer = () => {
    const app = express()

    const server = createUserServer()

    server.applyMiddleware({ app })

    app.listen({ port: 5000 }, () => console.log(`Server is ready at http://localhost:5000${server.graphqlPath}`))
}
startServer()