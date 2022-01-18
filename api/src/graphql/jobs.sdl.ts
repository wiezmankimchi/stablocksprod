export const schema = gql`
  type Job {
    id: String!
    title: String!
    description: String!
    user: User!
    userId: String!
    applications: [Application]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    jobs: [Job!]! @requireAuth
    job(id: String!): Job @requireAuth
  }

  input CreateJobInput {
    title: String!
    description: String!
    userId: String!
  }

  input UpdateJobInput {
    title: String
    description: String
    userId: String
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: String!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: String!): Job! @requireAuth
  }
`
