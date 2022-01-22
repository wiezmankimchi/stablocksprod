export const schema = gql`
  type TicketComment {
    id: String!
    message: String!
    user: User!
    userId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    ticketComments: [TicketComment!]! @requireAuth
    ticketComment(id: String!): TicketComment @requireAuth
  }

  input CreateTicketCommentInput {
    message: String!
    userId: String!
  }

  input UpdateTicketCommentInput {
    message: String
    userId: String
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
