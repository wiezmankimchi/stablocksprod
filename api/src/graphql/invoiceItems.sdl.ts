export const schema = gql`
  type InvoiceItem {
    id: String!
    name: String!
    units: Int!
    rate: Int!
    description: String
    invoice: Invoice!
    invoiceId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    invoiceItems: [InvoiceItem!]! @requireAuth
  }

  input CreateInvoiceItemInput {
    name: String!
    units: Int!
    rate: Int!
    description: String
    invoiceId: String!
  }

  input UpdateInvoiceItemInput {
    name: String
    units: Int
    rate: Int
    description: String
    invoiceId: String
  }
`
