export const schema = gql`
  type TaskComment {
    id: String!
    message: String!
    task: Task!
    taskId: String!
    user: User!
    userId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    taskComments: [TaskComment!]! @requireAuth
    taskComment(id: String!): TaskComment @requireAuth
  }

  input CreateTaskCommentInput {
    message: String!
    taskId: String!
    userId: String!
  }

  input UpdateTaskCommentInput {
    message: String
    taskId: String
    userId: String
  }

  type Mutation {
    createTaskComment(input: CreateTaskCommentInput!): TaskComment! @requireAuth
    updateTaskComment(
      id: String!
      input: UpdateTaskCommentInput!
    ): TaskComment! @requireAuth
    deleteTaskComment(id: String!): TaskComment! @requireAuth
  }
`
