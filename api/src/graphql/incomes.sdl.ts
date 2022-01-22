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
`
