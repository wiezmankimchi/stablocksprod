export const schema = gql`
  type ChatMessage {
    id: String!
    user: User!
    userId: String!
    viewed: Boolean!
    message: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    chatMessages: [ChatMessage!]! @requireAuth
  }

  input CreateChatMessageInput {
    userId: String!
    viewed: Boolean!
    message: String!
  }

  input UpdateChatMessageInput {
    userId: String
    viewed: Boolean
    message: String
  }
`
