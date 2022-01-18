export const schema = gql`
  type Project {
    id: String!
    title: String!
    description: String
    tasks: [Task]!
    user: User!
    userId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: String!): Project @requireAuth
  }

  input CreateProjectInput {
    title: String!
    description: String
    userId: String!
  }

  input UpdateProjectInput {
    title: String
    description: String
    userId: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: String!, input: UpdateProjectInput!): Project!
      @requireAuth
    deleteProject(id: String!): Project! @requireAuth
  }
`
