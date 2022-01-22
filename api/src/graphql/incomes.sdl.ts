export const schema = gql`
  type Income {
    id: String!
    name: String!
    amount: Int!
    date: DateTime!
    currency: String!
    invoice: Invoice
    invoiceId: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    incomes: [Income!]! @requireAuth
    income(id: String!): Income @requireAuth
  }

  input CreateIncomeInput {
    name: String!
    amount: Int!
    date: DateTime!
    currency: String!
    invoiceId: String
  }

  input UpdateIncomeInput {
    name: String
    amount: Int
    date: DateTime
    currency: String
    invoiceId: String
  }

  type Mutation {
    createIncome(input: CreateIncomeInput!): Income! @requireAuth
    updateIncome(id: String!, input: UpdateIncomeInput!): Income! @requireAuth
    deleteIncome(id: String!): Income! @requireAuth
  }
`
