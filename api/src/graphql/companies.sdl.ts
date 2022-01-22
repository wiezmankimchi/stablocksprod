export const schema = gql`
  type Company {
    id: String!
    name: String!
    website: String
    phone: Int
    contacts: [Contact]!
    user: User!
    userId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: String!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    website: String
    phone: Int
    userId: String!
  }

  input UpdateCompanyInput {
    name: String
    website: String
    phone: Int
    userId: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
      @requireAuth
    deleteCompany(id: String!): Company! @requireAuth
  }
`
