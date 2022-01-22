export const schema = gql`
  type Chat {
    id: String!
    user: User!
    userId: String!
    assignee: User
    assigneeId: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    chats: [Chat!]! @requireAuth
  }

  input CreateChatInput {
    userId: String!
    assigneeId: String
  }

  input UpdateChatInput {
    userId: String
    assigneeId: String
  }
`
