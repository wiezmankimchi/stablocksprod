export const schema = gql`
  type Application {
    id: String!
    job: Job!
    jobId: String!
    user: User!
    userId: String!
    status: ApplicationStatus!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum ApplicationStatus {
    draft
    submitted
    reviewed
    offered
    archived
  }

  type Query {
    applications: [Application!]! @requireAuth
    application(id: String!): Application @requireAuth
  }

  input CreateApplicationInput {
    jobId: String!
    userId: String!
    status: ApplicationStatus!
  }

  input UpdateApplicationInput {
    jobId: String
    userId: String
    status: ApplicationStatus
  }

  type Mutation {
    createApplication(input: CreateApplicationInput!): Application! @requireAuth
    updateApplication(
      id: String!
      input: UpdateApplicationInput!
    ): Application! @requireAuth
    deleteApplication(id: String!): Application! @requireAuth
  }
`
