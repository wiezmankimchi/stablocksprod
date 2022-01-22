export const schema = gql`
  type EmployeePay {
    id: String!
    amount: Int!
    currency: String!
    type: EmployeePayType!
    frequency: Frequency!
    user: User!
    userId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum EmployeePayType {
    salary
    hourly
    contract
  }
  enum Frequency {
    daily
    weekly
    biweekly
    monthly
    bimonthly
    annually
  }

  type Query {
    employeePays: [EmployeePay!]! @requireAuth
    employeePay(id: String!): EmployeePay @requireAuth
  }

  input CreateEmployeePayInput {
    amount: Int!
    currency: String!
    type: EmployeePayType!
    frequency: Frequency!
    userId: String!
  }

  input UpdateEmployeePayInput {
    amount: Int
    currency: String
    type: EmployeePayType
    frequency: Frequency
    userId: String
  }

  type Mutation {
    createEmployeePay(input: CreateEmployeePayInput!): EmployeePay! @requireAuth
    updateEmployeePay(
      id: String!
      input: UpdateEmployeePayInput!
    ): EmployeePay! @requireAuth
    deleteEmployeePay(id: String!): EmployeePay! @requireAuth
  }
`
