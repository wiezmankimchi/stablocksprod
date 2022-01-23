export const schema = gql`
  type User {
    id: String!
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    otherEmails: [String]!
    profileImage: String
    roles: Role
    position: String
    departments: [Department]!
    supervisorId: String
    supervisor: User
    employees: [User]!
    pay: EmployeePay
    jobs: [Job]!
    applications: [Application]!
    resume: String
    contacts: [Contact]!
    contactNotes: [ContactNote]!
    companies: [Company]!
    ticketsCreated: [Ticket]!
    ticketsAssigned: [Ticket]!
    ticketComments: [TicketComment]!
    chatsCreated: [Chat]!
    chatsAssigned: [Chat]!
    chatMessages: [ChatMessage]!
    projects: [Project]!
    tasksCreated: [Task]!
    tasksAssigned: [Task]!
    taskComments: [TaskComment]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    otherEmails: [String]
    profileImage: String
    position: String
    supervisorId: String
    resume: String
  }

  input UpdateUserInput {
    firstName: String
    middleName: String
    lastName: String
    email: String
    otherEmails: [String]
    profileImage: String
    position: String
    supervisorId: String
    resume: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
