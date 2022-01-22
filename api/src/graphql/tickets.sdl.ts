export const schema = gql`
  type Ticket {
    id: String!
    title: String!
    description: String
    status: Status!
    user: User!
    userId: String!
    assignee: User
    assigneeId: String
    task: Task
    taskId: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum Status {
    open
    pending
    closed
    archived
  }

  type Query {
    tickets: [Ticket!]! @requireAuth
    ticket(id: String!): Ticket @requireAuth
  }

  input CreateTicketInput {
    title: String!
    description: String
    status: Status!
    userId: String!
    assigneeId: String
    taskId: String
  }

  input UpdateTicketInput {
    title: String
    description: String
    status: Status
    userId: String
    assigneeId: String
    taskId: String
  }

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket! @requireAuth
    updateTicket(id: String!, input: UpdateTicketInput!): Ticket! @requireAuth
    deleteTicket(id: String!): Ticket! @requireAuth
  }
`
