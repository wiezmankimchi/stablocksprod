export const schema = gql`
  type Expense {
    id: String!
    name: String!
    amount: Int!
    date: DateTime!
    authorizedDate: DateTime
    currency: String!
    category: ExpenseCategory
    categoryId: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    expenses: [Expense!]! @requireAuth
  }

  input CreateExpenseInput {
    name: String!
    amount: Int!
    date: DateTime!
    authorizedDate: DateTime
    currency: String!
    categoryId: String
  }

  input UpdateExpenseInput {
    name: String
    amount: Int
    date: DateTime
    authorizedDate: DateTime
    currency: String
    categoryId: String
  }
`
