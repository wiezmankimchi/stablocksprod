export const schema = gql`
  type Invoice {
    id: String!
    contact: Contact!
    contactId: String!
    currency: String!
    issued: DateTime!
    dueDate: DateTime!
    sent: Boolean!
    paid: Boolean!
    description: String
    items: [InvoiceItem]!
    income: Income
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    invoices: [Invoice!]! @requireAuth
  }

  input CreateInvoiceInput {
    contactId: String!
    currency: String!
    issued: DateTime!
    dueDate: DateTime!
    sent: Boolean!
    paid: Boolean!
    description: String
  }

  input UpdateInvoiceInput {
    contactId: String
    currency: String
    issued: DateTime
    dueDate: DateTime
    sent: Boolean
    paid: Boolean
    description: String
  }
`
