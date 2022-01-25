export const schema = gql`
  type TicketComment {
    id: String!
    user: User!
    userId: String!
    Ticket: Ticket!
    ticketId: Int!
    message: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    ticketComments: [TicketComment!]! @requireAuth
    ticketComment(id: String!): TicketComment @requireAuth
  }

  input CreateTicketCommentInput {
    userId: String!
    ticketId: Int!
    message: String!
  }

  input UpdateTicketCommentInput {
    userId: String
    ticketId: Int
    message: String
  }

  type Mutation {
    createTicketComment(input: CreateTicketCommentInput!): TicketComment!
      @requireAuth
    updateTicketComment(
      id: String!
      input: UpdateTicketCommentInput!
    ): TicketComment! @requireAuth
    deleteTicketComment(id: String!): TicketComment! @requireAuth
  }
`
