import {ApolloServer,gql} from 'apollo-server-express'

const users = [
    {username: "Jane", email: "jane@test.com", passwrod: "abc"}
]

const typeDefs = gql`
    type User{
        id: String!
        username: String!
        email: Strint!
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
        createUser: (_: any, args: InputArgs ) => {
            const {email,password,username} = args
            const newUser = {id: "345", username, email, password}
            users.push(newUser)
            return newUser
        }
    }
}

export default () => {
    return new ApolloServer({typeDefs, resolvers})
}