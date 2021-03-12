import { ApolloServer, gql } from 'apollo-server-express'

const users = [
    { id: "123", username: "Jane", email: "jane@test.com", password: "abc" }
]

const typeDefs = gql`
    type User{
        id: String!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        users: [User]!
    }
    
    type Mutation {
        createUser(username: String! email: String! password: String!): User
    }
`
interface InputArgs {
    username: string
    email: string
    password: string
}

const resolvers = {
    Query: {
        users: () => users
    },
    Mutation: {
        createUser: (_: any, args: InputArgs) => {
            const { username, email, password } = args
            const newUser = {
                id: "345",
                username,
                email,
                password
            }
            users.push(newUser)
            return newUser
        }
    }
}

export default () => {
    return new ApolloServer({ typeDefs, resolvers })
}