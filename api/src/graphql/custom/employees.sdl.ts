export const schema = gql`
  type Query {
    employees: [User!]! @requireAuth
  }

  input CreateFirstUserInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Mutation {
    createFirstUser(input: CreateFirstUserInput!): User! @skipAuth
  }
`
