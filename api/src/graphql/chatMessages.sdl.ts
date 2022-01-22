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
    chatMessage(id: String!): ChatMessage @requireAuth
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

  type Mutation {
    createChatMessage(input: CreateChatMessageInput!): ChatMessage! @requireAuth
    updateChatMessage(
      id: String!
      input: UpdateChatMessageInput!
    ): ChatMessage! @requireAuth
    deleteChatMessage(id: String!): ChatMessage! @requireAuth
  }
`
