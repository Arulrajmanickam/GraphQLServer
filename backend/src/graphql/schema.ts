import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
        name: String
        email: String
        gender: String
        nat: String
        id: Int!
        project: PROJECT
    }

    type PROJECT {
        name: String!
        projectID: Int!
        status: String
        startingdata: String
        duration: String
    }
    

    type Query{
        users: [User]
    }
`;