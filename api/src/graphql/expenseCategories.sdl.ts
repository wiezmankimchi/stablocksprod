export const schema = gql`
  type ExpenseCategory {
    id: String!
    name: String!
    default: Boolean!
    expenses: [Expense]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    expenseCategories: [ExpenseCategory!]! @requireAuth
  }

  input CreateExpenseCategoryInput {
    name: String!
    default: Boolean!
  }

  input UpdateExpenseCategoryInput {
    name: String
    default: Boolean
  }
`
